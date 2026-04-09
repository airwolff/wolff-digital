export interface StackCard {
  name: string;
  description: string;
  cost: string;
  isDubsado?: boolean;
}

export const stack: StackCard[] = [
  {
    name: 'Astro',
    description:
      "The framework used to build your site. Think of it as the software that turns your content into fast, clean web pages — it only sends what's needed to each visitor, which is why the pages load so quickly.",
    cost: 'No ongoing cost',
  },
  {
    name: 'Cloudflare',
    description:
      'Where your site lives. It copies your pages to servers around the world, so visitors load from the one nearest to them — fast everywhere, including rural Maine.',
    cost: 'Free to start — no ongoing bill for most sites',
  },
  {
    name: 'Image optimizer',
    description:
      "Every photo you upload gets compressed automatically. It looks sharp but loads fast — no extra work on your end, happens every time you publish.",
    cost: 'Built in',
  },
  {
    name: 'CloudCannon',
    description:
      "Your editing dashboard. Log in, click on any text or image on your site, change it, hit publish. No calls to me for small updates — it works like a simple word processor for your site.",
    cost: 'Small monthly fee — billed directly to you',
  },
  {
    name: 'Fathom Analytics',
    description:
      "Shows you how many people visited, where they came from, and what they looked at — without storing personal data or sharing anything with Google's ad network.",
    cost: 'Included in every build',
  },
  {
    name: 'GitHub + auto-deploy',
    description:
      "A running backup of everything. Every change I make gets saved automatically. If something ever goes wrong, restoring it is one click. Updates go live the moment I push them.",
    cost: 'Free',
  },
  {
    name: 'Dubsado',
    description:
      "How I send proposals, collect signatures, and invoice — it also powers the inquiry form on this page. If you run a service business and want a clean system for managing your own clients, I can set this up for you too.",
    cost: "My cost for running projects — optional setup available for your business",
    isDubsado: true,
  },
];
