export type CopyMode = 'spacecraft' | 'reference';

export interface CopyContent {
  brandName: string;
  navLinks: string[];
  headlineLine1: string;
  headlineLine2Prefix: string;
  headlineLine2Highlight: string;
  subtext: string;
  readMoreBtn: string;
  joinWaitlistBtn: string;
  bottomText: string;
}

export type ActiveNavModal = 'Features' | 'Workflows' | 'Testimonials' | 'Our Vision' | 'Contact' | null;
