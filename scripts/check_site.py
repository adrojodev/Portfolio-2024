"""Check the generated static site: routing, document structure, assets, and metadata.

Run after npm run build. Uses only the Python standard library.
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1] / "dist"


class Document(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.ids = set()
        self.links = []
        self.assets = []
        self.meta = {}
        self.counts = {"html": 0, "head": 0, "body": 0, "main": 0, "h1": 0}
        self.canonical = None
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in self.counts:
            self.counts[tag] += 1
        if "id" in attrs:
            assert attrs["id"] not in self.ids, f"Duplicate id in {self.path}: {attrs['id']}"
            self.ids.add(attrs["id"])
        if tag == "meta":
            self.meta[attrs.get("property", attrs.get("name"))] = attrs.get("content")
        if tag == "a":
            assert attrs.get("href"), f"Missing href in {self.path}"
            self.links.append(attrs["href"])
            if attrs.get("target") == "_blank":
                assert {"noopener", "noreferrer"} <= set(attrs.get("rel", "").split()), f"Unsafe external link in {self.path}"
        if tag == "img":
            assert "alt" in attrs, f"Missing image alt in {self.path}"
            assert attrs.get("width") and attrs.get("height"), f"Missing image dimensions in {self.path}"
            self.assets.append(attrs["src"])
            self.assets.extend(item.strip().split()[0] for item in attrs.get("srcset", "").split(",") if item.strip())
        if tag == "script" and attrs.get("src"):
            self.assets.append(attrs["src"])
        if tag == "link":
            if attrs.get("rel") == "canonical":
                self.canonical = attrs.get("href")
            elif attrs.get("rel") in ("stylesheet", "icon"):
                self.assets.append(attrs["href"])


def resolve_page(url, current):
    path = unquote(urlsplit(url).path)
    target = ROOT / path.lstrip("/") if path.startswith("/") else current.parent / path
    return target / "index.html" if target.is_dir() else target


documents = {path.resolve(): Document(path) for path in ROOT.rglob("*.html")}
assert len(documents) == 9, f"Expected nine static pages, found {len(documents)}"
for path, doc in documents.items():
    assert all(count == 1 for count in doc.counts.values()), f"Invalid document structure in {path}: {doc.counts}"
    assert "main" in doc.ids, f"Missing skip-link destination in {path}"
    expected_url = "https://www.adrojo.com/" + str(path.relative_to(ROOT)).removesuffix("index.html")
    assert doc.canonical == expected_url, f"Wrong canonical for {path}"
    assert doc.meta.get("description"), f"Missing description in {path}"
    assert doc.meta.get("og:url") == expected_url, f"Wrong sharing URL in {path}"
    assert doc.meta.get("twitter:card") == "summary_large_image"
    assert doc.meta.get("og:image", "").startswith("https://www.adrojo.com/")
    for asset in doc.assets:
        if not urlsplit(asset).scheme:
            assert (ROOT / unquote(urlsplit(asset).path).lstrip("/")).is_file(), f"Missing asset {asset} in {path}"
    for link in doc.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        target = resolve_page(link, path).resolve() if url.path else path
        assert target.is_file(), f"Broken local link {link} in {path}"
        if url.fragment:
            assert target in documents and unquote(url.fragment) in documents[target].ids, f"Broken anchor {link} in {path}"
print(f"PASS: {len(documents)} pages; unique IDs, document landmarks, local links/anchors, image dimensions, asset files, safe external links, and sharing metadata.")
