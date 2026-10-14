import musho from '../assets/products/musho-restored.png';
import lummi from '../../public/images/projects/lummi.jpg';
import happyPlaces from '../../public/images/projects/happy-places.jpg';
import happyScroll from '../../public/images/projects/happy-scroll.jpg';
import buenoverse from '../../public/images/projects/buenoverse.jpg';
import wrestle from '../../public/images/projects/wrestle.jpg';
import keepItShort from '../../public/images/projects/keep-it-short.jpg';
import briefs1 from '../assets/products/briefs-1.jpg';
import briefs2 from '../assets/products/briefs-2.jpg';
import dine1 from '../assets/products/dine-1.jpg';
import dine2 from '../assets/products/dine-2.jpg';
import dine3 from '../assets/products/dine-3.jpg';
import lyftBusiness from '../assets/products/lyft-business.png';
import miniBriefsCover from '../../public/images/projects/mini-briefs.jpg';
import dineIcon from '../assets/products/dine-icon.jpg';
import type { ImageMetadata } from 'astro';

export { dineIcon };
export const projectCovers: Record<string, { src: ImageMetadata; alt: string }> = {
  'mini-briefs': { src: miniBriefsCover, alt: 'Original Mini Briefs artwork: a newspaper reader, a cat, and the Mini Briefs title' },
};

export const projectMedia: Record<string, { src: ImageMetadata; alt: string }[]> = {
  musho: [{ src: musho, alt: 'Musho’s original yellow identity and robot mascot' }],
  lummi: [{ src: lummi, alt: 'The Lummi image library, with a grid of curated visuals' }],
  'lyft-business': [{ src: lyftBusiness, alt: 'Lyft Business public photography: a passenger getting into a car outside an office building' }],
  'mini-briefs': [
    { src: briefs1, alt: 'Mini Briefs published iOS preview: a daily brief with reading and listening controls' },
    { src: briefs2, alt: 'Mini Briefs published iOS preview: a personalized brief with a listening control' },
  ],
  dine: [
    { src: dine1, alt: 'Dine’s overview of trips, savings goals, and budgets' },
    { src: dine2, alt: 'Dine’s native form for adding an expense' },
    { src: dine3, alt: 'Dine’s budget detail and expense breakdown' },
  ],
  'happy-places': [{ src: happyPlaces, alt: 'Happy Places, an independent iOS app' }],
  'happy-scroll': [{ src: happyScroll, alt: 'Happy Scroll project artwork from the original portfolio' }],
  buenoverse: [{ src: buenoverse, alt: 'An illustrated world in Buenoverse' }],
  wrestle: [{ src: wrestle, alt: 'Wrestle, a game in the Humankind universe' }],
  'keep-it-short': [{ src: keepItShort, alt: 'Keep it short project artwork from the original portfolio' }],
};
