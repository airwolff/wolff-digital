export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  accentColor: string; // Tailwind border color class
}

export const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'We talk',
    description:
      "A short call, no pressure. Tell me what you need. I'll tell you if I can do it and roughly what it would cost.",
    accentColor: 'border-neutral',
  },
  {
    number: '2',
    title: 'You get a proposal',
    description:
      "A written document with exactly what I'll build, when it'll be done, and what it costs. You can ask questions, request changes, or sign and go.",
    accentColor: 'border-secondary',
  },
  {
    number: '3',
    title: 'I build it',
    description:
      'Regular check-ins so you can see progress and give feedback before anything is finalized. No big reveals at the end.',
    accentColor: 'border-accent',
  },
  {
    number: '4',
    title: 'Training, docs, and launch',
    description:
      "Before we go live, I walk you through everything. You get written documentation to keep. Then we launch — and I'm still here after.",
    accentColor: 'border-neutral',
  },
];
