import { Product, ProductCategory, Article } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'kalki-drishti',
    name: 'Kalki Drishti',
    price: 1299,
    category: ProductCategory.WEARABLE,
    tagline: 'See the Unseen.',
    description: 'Augmented reality contact lenses crafted from biocompatible sapphire glass. Drishti overlays the digital world onto the physical with zero latency, allowing you to perceive the data stream of reality without breaking eye contact.',
    features: ['Sapphire Waveguide', 'Retinal Projection', 'Infinite Focus', 'Thought Control Interface'],
    image: 'https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1535581652167-3d6b98c4fda2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'kalki-shruti',
    name: 'Kalki Shruti',
    price: 499,
    category: ProductCategory.AUDIO,
    tagline: 'Hear the Silence.',
    description: 'Bone conduction neural implants disguised as obsidian ear cuffs. Shruti bypasses the eardrum to deliver sound directly to the inner ear, creating a private soundscape that feels like an internal monologue.',
    features: ['Neural Resonance', 'Obsidian Casing', 'Active Silence', 'Voice Isolation'],
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2070&auto=format&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2032&auto=format&fit=crop',
  },
  {
    id: 'kalki-tabula',
    name: 'Kalki Tabula',
    price: 1499,
    category: ProductCategory.MOBILE,
    tagline: 'Infinite Memory.',
    description: 'A tablet formed from a single sheet of flexible black graphene. It feels like slate, writes like paper, and thinks like a supercomputer. The display emits no blue light, protecting your circadian rhythm.',
    features: ['Flexible Graphene', 'Zero-Light Emitter', 'Haptic Slate Texture', 'Solar Charging'],
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2184&auto=format&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'kalki-prana',
    name: 'Kalki Prana',
    price: 649,
    category: ProductCategory.HOME,
    tagline: 'Breath of Life.',
    description: 'An atmospheric generator that restructures indoor air quality at a molecular level. Housed in a monolith of raw basalt, it ionizes the air to replicate the atmosphere of a Himalayan peak.',
    features: ['Molecular Ionization', 'Basalt Monolith', 'Silent Airflow', 'Mood Scenting'],
    image: 'https://images.unsplash.com/photo-1507646227500-4d38930012be?q=80&w=2000&auto=format&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'kalki-lumen',
    name: 'Kalki Lumen',
    price: 299,
    category: ProductCategory.HOME,
    tagline: 'Liquid Light.',
    description: 'A smart luminary that holds light like water in a vessel. The hand-blown dark glass contains a suspended photon fluid that shifts color based on the time of day and your biometric stress levels.',
    features: ['Photon Fluid', 'Bio-Feedback Sync', 'Hand-blown Dark Glass', 'Levitation Base'],
    image: 'https://images.unsplash.com/photo-1513506003013-35991a199333?q=80&w=1974&auto=format&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2068&auto=format&fit=crop',
  },
  {
    id: 'kalki-chronos',
    name: 'Kalki Chronos',
    price: 899,
    category: ProductCategory.WEARABLE,
    tagline: 'Time Flows.',
    description: 'A wristwatch with no hands or digits. It displays time as a flowing ferrofluid magnetic structure. It teaches you to view time not as a constraint, but as a fluid dimension.',
    features: ['Ferrofluid Display', 'Titanium Mesh', 'Kinetic Power', 'Celestial Tracking'],
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1976&auto=format&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1617317376997-8748e6862c01?q=80&w=2070&auto=format&fit=crop',
  },
];

export const JOURNAL_ARTICLES: Article[] = [
  {
    id: 'future-nostalgia',
    title: 'Future Nostalgia',
    excerpt: 'Why we crave ancient materials in our futuristic tools.',
    date: 'Era 2025.04',
    content: 'We stand at the precipice of the singularity, yet our hands reach for stone. Kalki Vision explores this paradox. We believe that as our minds ascend into the digital cloud, our bodies require a stronger anchor to the earth. Obsidian, basalt, gold—these are not just materials; they are conductors of history.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 'digital-ascension',
    title: 'Digital Ascension',
    excerpt: 'Transcending the screen: The philosophy of the Drishti Interface.',
    date: 'Era 2025.05',
    content: 'The screen is a wall. It separates the observer from the observed. The Kalki Drishti lens is designed to dissolve that wall. By projecting information directly onto the retina, we merge the seer and the seen. Information becomes intuition. Knowledge becomes gnosis.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop'
  },
  {
    id: 'silence-protocol',
    title: 'The Silence Protocol',
    excerpt: 'Designing technology that knows when to speak and when to listen.',
    date: 'Era 2025.06',
    content: 'In a world of constant noise, silence is the ultimate luxury. Kalki devices operate on the "Silence Protocol". They are dormant until called upon. They do not notify; they await presence. We are redesigning the relationship between master and tool.',
    image: 'https://images.unsplash.com/photo-1481819613568-3701cbc70156?q=80&w=2000&auto=format&fit=crop'
  }
];