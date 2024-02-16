import { useRef, useState } from "react";
import classNames from "classnames";

import { useOutsideAlerter } from "../utils/clickOutside";

export default function Menu({ isHome = false }: { isHome?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOutsideAlerter({ ref, handleClick: () => setOpen(false) });

  const homePath = isHome ? "" : "/";

  return (
    <div className="fixed flex flex-col items-end top-6 right-4 z-50">
      <div className="flex flex-col gap-2 items-end md:hidden">
        <button
          ref={ref}
          onClick={() => setOpen(!open)}
          className={classNames(
            "p-1 rounded-xl border-2 border-border flex justify-center items-center aspect-square w-fit h-fit shadow-border-muted transition-all",
            open
              ? "bg-border-muted shadow-sm scale-95"
              : "bg-background shadow-md scale-100"
          )}
        >
          <img src="/icons/List.svg" />
        </button>
        <div
          className={classNames(
            "flex flex-col gap-3 bg-background border-border rounded-xl shadow-md shadow-border-muted transition-all duration-500",
            open
              ? "max-h-96 pl-3 pr-10 py-4 border-2"
              : "max-h-0 p-0 border-none"
          )}
        >
          <a
            href={`${homePath}#heading`}
            className={classNames(
              "flex gap-2 cursor-pointer transition-all delay-200",
              open ? "scale-100" : "scale-0"
            )}
          >
            <img src="/icons/House.svg" />
            Home
          </a>
          <a
            href={`${homePath}#projects`}
            className={classNames(
              "flex gap-2 cursor-pointer transition-all delay-150",
              open ? "scale-100" : "scale-0"
            )}
          >
            <img src="/icons/Pencil.svg" />
            Projects
          </a>
          <a
            href={`${homePath}#jobs`}
            className={classNames(
              "flex gap-2 cursor-pointer transition-all delay-100",
              open ? "scale-100" : "scale-0"
            )}
          >
            <img src="/icons/Briefcase.svg" />
            Jobs
          </a>
          <a
            href={`${homePath}#updates`}
            className={classNames(
              "flex gap-2 cursor-pointer transition-all delay-75",
              open ? "scale-100" : "scale-0"
            )}
          >
            <img src="/icons/ClockClockwise.svg" />
            Updates
          </a>
          <a
            href={`${homePath}#connect`}
            className={classNames(
              "flex gap-2 cursor-pointer transition-all delay-0",
              open ? "scale-100" : "scale-0"
            )}
          >
            <img src="/icons/EnvelopeSimple.svg" className="w-6 h-6" />
            Connect
          </a>
        </div>
      </div>
      <div className="gap-4 hidden border-2 border-border bg-background shadow-sm shadow-border-muted p-1 rounded-full md:flex">
        <a
          href={`${homePath}#heading`}
          className="flex gap-2 cursor-pointer pl-2 pr-1 py-2 justify-center items-center rounded-full border-transparent border-2 hover:px-3 hover:border-border hover:bg-border-muted transition-all group"
        >
          <img src="/icons/House.svg" />
          <span className="scale-0 max-w-0 group-hover:scale-100 group-hover:max-w-24 transition-all duration-300">
            Home
          </span>
        </a>
        <a
          href={`${homePath}#projects`}
          className="flex gap-2 cursor-pointer px-1 py-2 justify-center items-center rounded-full border-transparent border-2 hover:px-3 hover:border-border hover:bg-border-muted transition-all group"
        >
          <img src="/icons/Pencil.svg" />
          <span className="scale-0 max-w-0 group-hover:scale-100 group-hover:max-w-24 transition-all duration-300">
            Projects
          </span>
        </a>
        <a
          href={`${homePath}#jobs`}
          className="flex gap-2 cursor-pointer px-1 py-2 justify-center items-center rounded-full border-transparent border-2 hover:px-3 hover:border-border hover:bg-border-muted transition-all group"
        >
          <img src="/icons/Briefcase.svg" />
          <span className="scale-0 max-w-0 group-hover:scale-100 group-hover:max-w-24 transition-all duration-300">
            Jobs
          </span>
        </a>
        <a
          href={`${homePath}#updates`}
          className="flex gap-2 cursor-pointer px-1 py-2 justify-center items-center rounded-full border-transparent border-2 hover:px-3 hover:border-border hover:bg-border-muted transition-all group"
        >
          <img src="/icons/ClockClockwise.svg" />
          <span className="scale-0 max-w-0 group-hover:scale-100 group-hover:max-w-24 transition-all duration-300">
            Updates
          </span>
        </a>
        <a
          href={`${homePath}#connect`}
          className="flex gap-2 cursor-pointer px-1 py-2 justify-center items-center rounded-full border-transparent border-2 hover:px-3 hover:border-border hover:bg-border-muted transition-all group"
        >
          <img src="/icons/EnvelopeSimple.svg" className="w-6 h-6" />
          <span className="scale-0 max-w-0 group-hover:scale-100 group-hover:max-w-24 transition-all duration-300">
            Connect
          </span>
        </a>
      </div>
    </div>
  );
}
