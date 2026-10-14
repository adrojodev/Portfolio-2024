export interface CaseSection {
  label: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: { title: string; text: string };
}
export interface CaseStudy {
  headline: string;
  intro: string;
  caption: string;
  actions: { label: string; url: string }[];
  sections: CaseSection[];
  sources: { label: string; url: string }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  musho: {
    headline: 'Making AI useful inside the design process.',
    intro: 'Musho was an AI-powered Figma plugin for generating websites and interfaces. I helped create it with a small team of designers and engineers.',
    caption: 'Musho artwork restored from this portfolio’s original image. The product is no longer actively available; the linked demo documents the original experience.',
    actions: [{ label: 'Watch the original demo', url: 'https://www.youtube.com/watch?v=ubtINDoCttw' }, { label: 'View the launch', url: 'https://www.producthunt.com/products/musho?launch=musho' }],
    sections: [
      { label: 'The product', title: 'From a prompt to an editable interface.', paragraphs: ['Musho brought AI-assisted website and interface generation into Figma. Its public demo shows generated layouts and copy that people could continue working with in their design environment.'] },
      { label: 'My role', title: 'Building with a creative team.', paragraphs: ['I co-created Musho and contributed frontend and full-stack development, collaborating on the product experience.', 'I contributed to interaction design and refined the interface through implementation.'] },
      { label: 'The launch', title: 'A shipped creative tool.', paragraphs: ['Musho reached #1 Product of the Day on Product Hunt at its April 2024 launch. That was a team achievement.', 'Musho is presented here as a historical project, with links to the original public demo and launch.'] },
    ],
    sources: [{ label: 'Product Hunt launch & award', url: 'https://www.producthunt.com/products/musho?launch=musho' }, { label: 'Original public demo', url: 'https://www.youtube.com/watch?v=ubtINDoCttw' }],
  },
  'mini-briefs': {
    headline: 'Catch up. Then get on with your day.',
    intro: 'Mini Briefs is my independent news product for the web and iOS. It explores how AI can make staying informed more approachable through short summaries, reading, and audio.',
    caption: 'Actual promotional screenshots from my published Mini Briefs App Store listing. They show the released iOS experience in Spanish.',
    actions: [{ label: 'Open Mini Briefs', url: 'https://www.minibriefs.news/' }, { label: 'View on the App Store', url: 'https://apps.apple.com/es/app/mini-briefs/id6769941337' }],
    sections: [
      { label: 'Product direction', title: 'A news experience with an ending.', paragraphs: ['The product starts with a simple question: how much do you need to know before you can return to your day? Mini Briefs organizes news into short daily summaries instead of asking people to keep scrolling.', 'The published iOS experience offers brief audio updates, topic categories, and English and Spanish. Reading and listening are two ways into the same product, rather than two separate destinations.'] },
      { label: 'My role', title: 'Ownership from the first framework to release.', paragraphs: ['I establish the initial product framework and direction, work extensively with AI coding agents on design and implementation, and refine the experience through iteration.', 'My ownership is in the decisions, integration, review, and delivery. Working with agents lets me explore and implement ideas, then evaluate the result against the experience I want to ship.'] },
      { label: 'The experience', title: 'Read, listen, choose what matters.', paragraphs: ['The web product offers dated editions and an archive. On iOS, people can read or listen, change language, and explore topic-based briefings. Published releases also document personalized briefs with topic and voice choices.', 'Those surfaces put information architecture at the center of the product: what belongs in a daily update, how topics are organized, and where reading and listening controls appear.'], bullets: ['Daily summaries with a clear date and a finite scope.', 'Audio briefings for moments when listening is easier than reading.', 'English and Spanish, with personalized briefing options on iOS.'] },
      { label: 'Delivery & iteration', title: 'A product I keep returning to.', paragraphs: ['Mini Briefs is available on the web and the App Store. Public release notes record iterations on language handling, audio playback, personalized briefings, and iPad support.', 'The work combines product direction, AI model integration, information design, and ongoing refinement. Each release is another opportunity to improve the reading and listening experience.'] },
    ],
    sources: [{ label: 'Mini Briefs — live web product', url: 'https://www.minibriefs.news/' }, { label: 'App Store features & release history', url: 'https://apps.apple.com/es/app/mini-briefs/id6769941337' }],
  },
  dine: {
    headline: 'Money is personal. Sometimes it’s shared.',
    intro: 'Dine is my independent native iOS app for personal and shared finances. It brings budgets, expenses, trips, and savings into a focused everyday experience.',
    caption: 'Actual screenshots from my published Dine App Store listing: the overview, adding an expense, and a shared budget.',
    actions: [{ label: 'View on the App Store', url: 'https://apps.apple.com/us/app/dine/id6799501885' }, { label: 'Read the privacy policy', url: 'https://adrojodev.github.io/dine-site/privacidad.html' }],
    sections: [
      { label: 'The everyday workflow', title: 'An amount. A description. An expense.', paragraphs: ['Dine’s published shared-budget flow is deliberately small: create a budget, invite people, and let each person add expenses with an amount and a description. On-device intelligence helps classify those expenses.', 'The actual interface brings trips, savings goals, and budgets into the overview. It also makes unresolved classification visible instead of pretending every AI suggestion is certain.'] },
      { label: 'My role', title: 'Defining the behavior, then refining the details.', paragraphs: ['I set the product behavior and design direction, use AI-assisted development, and iterate on the result. My work spans product decisions, native interaction design, integration, and delivery.', 'AI coding agents are part of the design and implementation process. I review the result, refine the behavior, and take responsibility for the experience that ships.'] },
      { label: 'Privacy & intelligence', title: 'Useful intelligence, close to the data.', paragraphs: ['Dine’s published privacy policy describes device storage and synchronization through a private iCloud database. Shared budgets use Apple’s iCloud sharing with the people invited.', 'Expense classification and summaries run on the iPhone with Apple Intelligence. Financial descriptions are not sent off-device for those features, as described in the linked privacy policy.'] },
      { label: 'The shipped product', title: 'A native app for a shared responsibility.', paragraphs: ['Dine is published on the App Store. It connects expense entry, shared budgets, and financial organization in a native application, with privacy as part of the product behavior.', 'The screens above are from the released app. They show the real interface, including its handling of expenses the AI could not assign.'] },
    ],
    sources: [{ label: 'Dine — App Store', url: 'https://apps.apple.com/us/app/dine/id6799501885' }, { label: 'Dine — published privacy policy', url: 'https://adrojodev.github.io/dine-site/privacidad.html' }],
  },
  lummi: {
    headline: 'Helping people find the right visual.',
    intro: 'Lummi is an AI-curated visual asset and image discovery product. I worked primarily on engineering, with active participation in design discussions and refinement.',
    caption: 'Original Lummi preview from this portfolio.',
    actions: [{ label: 'Explore Lummi', url: 'https://lummi.ai/' }],
    sections: [
      { label: 'The product', title: 'Discovery is part of the creative work.', paragraphs: ['Lummi brought curated imagery into a searchable visual library. The original public launch described filters for qualities such as color and orientation, along with a Figma integration.'] },
      { label: 'My contribution', title: 'Engineering in a design-focused team.', paragraphs: ['I contributed software engineering to Lummi and collaborated with the team on design discussions, interaction details, and product refinement.'] },
      { label: 'The result', title: 'A useful tool for other makers.', paragraphs: ['Lummi reached #4 Product of the Day on Product Hunt at its March 2024 launch. This is a team outcome.', 'Working on Lummi developed my understanding of visual quality, interaction details, and how design and engineering refine a product together.'] },
    ],
    sources: [{ label: 'Lummi — live product', url: 'https://lummi.ai/' }, { label: 'Product Hunt launch & award', url: 'https://www.producthunt.com/products/lummi?launch=lummi' }],
  },
  'lyft-business': {
    headline: 'Building for the business side of Lyft.',
    intro: 'I’m a software engineer at Lyft, working on Lyft Business. My work spans frontend initiatives and full-stack development.',
    caption: 'Public imagery from the Lyft Business website. Photo credit: Lyft.',
    actions: [{ label: 'Lyft Business — public website', url: 'https://www.lyft.com/business' }],
    sections: [
      { label: 'The product', title: 'Transportation for businesses.', paragraphs: ['Lyft Business offers transportation products for organizations. The linked public website introduces its services and the people they serve.'] },
      { label: 'My role', title: 'Engineering with attention to the experience.', paragraphs: ['I lead frontend initiatives and contribute across the stack, collaborating with designers, product managers, and engineers.', 'I care about clear interfaces and thoughtful interactions, and bring that attention to my engineering work.'] },
    ],
    sources: [{ label: 'Lyft Business — public product context', url: 'https://www.lyft.com/business' }],
  },
};
