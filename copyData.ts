import { CopyContent } from '../types';

export const COPY_PRESETS: Record<'spacecraft' | 'reference', CopyContent> = {
  spacecraft: {
    brandName: 'SPACECRAFT',
    navLinks: ['Features', 'Workflows', 'Testimonials', 'Our Vision', 'Contact'],
    headlineLine1: 'Be in touch with',
    headlineLine2Prefix: 'your ',
    headlineLine2Highlight: 'imagination',
    subtext: 'Our work begins where deep space beckons: we shape interplanetary vessels that do not exist yet and bring them to life through advanced propulsion and telemetry.',
    readMoreBtn: 'Read more',
    joinWaitlistBtn: 'Join the waitlist',
    bottomText: 'Imagination sparks possibility. Advanced propulsion turns those sparks into reality. Together, they shape the future of deep space exploration.',
  },
  reference: {
    brandName: '', // Just the iconic blurred orb symbol from reference
    navLinks: ['Features', 'Workflows', 'Testimonials', 'Our Vision', 'Contact'],
    headlineLine1: 'Be in touch with',
    headlineLine2Prefix: 'your ',
    headlineLine2Highlight: 'imagination',
    subtext: "Our work begins where imagination sparks: we shape ideas that don't exist yet and bring them to life through the power of AI.",
    readMoreBtn: 'Read more',
    joinWaitlistBtn: 'Join the waitlist',
    bottomText: 'Imagination sparks possibility. AI turns those sparks into reality. Together, they shape the future of creation.',
  },
};

export interface VesselSpec {
  category: string;
  specs: { label: string; value: string }[];
}

export const SPACECRAFT_SPECS: VesselSpec[] = [
  {
    category: 'Kinetic & Propulsion Architecture',
    specs: [
      { label: 'Propulsion Type', value: 'VASIMR Variable Specific Impulse Magnetoplasma' },
      { label: 'Specific Impulse (Isp)', value: '12,000 s' },
      { label: 'Delta-V Capability', value: '48.5 km/s' },
      { label: 'Maximum Acceleration', value: '0.82 g nominal' },
    ],
  },
  {
    category: 'Avionics & Structural Integrity',
    specs: [
      { label: 'Hull Composite', value: 'Graphene-Alloy Micrometeorite Lattice' },
      { label: 'Radiation Shielding', value: 'Active Quadrupole Magnetic Deflector' },
      { label: 'Autonomous Navigation', value: 'Deep-Space Pulsar Triangulation Unit' },
      { label: 'Comm Bandwidth', value: 'Deep Space Optical Comms (1.2 Gbps @ 1 AU)' },
    ],
  },
  {
    category: 'Mission Profile & Payload',
    specs: [
      { label: 'Operational Range', value: 'Cislunar to Outer Jovian Moons' },
      { label: 'Life Support Duration', value: '1,200 Days Closed-Loop Regenerative' },
      { label: 'Dry Mass', value: '18,400 kg' },
      { label: 'Payload Capacity', value: '6,200 kg to Trans-Mars Injection' },
    ],
  },
];
