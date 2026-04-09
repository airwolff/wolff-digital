export interface Service {
  title: string;
  description: string;
  accentColor: string; // Tailwind bg class
  textAccentColor: string; // Tailwind text class
}

export const services: Service[] = [
  {
    title: 'Web Design & Development',
    description:
      "A site that looks good, loads when you've got one bar of cell service, and works on every phone. You'll be able to update it yourself — no developer needed day-to-day. Every build includes written documentation and a training walkthrough.",
    accentColor: 'bg-primary',
    textAccentColor: 'text-primary',
  },
  {
    title: 'Email Design & Development',
    description:
      "Automated emails that go out when they should, say the right thing, and look great in every inbox. From a simple welcome sequence to a full campaign system. I've built these at enterprise scale for Wyndham.",
    accentColor: 'bg-secondary',
    textAccentColor: 'text-secondary',
  },
  {
    title: 'SEO',
    description:
      'Help people find you on Google. I make sure your site is structured the right way, loads fast (which Google rewards directly), and says the things your customers are actually searching for.',
    accentColor: 'bg-accent',
    textAccentColor: 'text-accent',
  },
];
