export enum ProductCategory {
  AUDIO = 'Audio',
  WEARABLE = 'Wearable',
  MOBILE = 'Mobile',
  HOME = 'Home'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  detailImage: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export interface CartItem extends Product {
  cartId: string; // Unique ID for cart instance
  selectedSize?: string;
}

export type ViewState = 'home' | 'product' | 'journal' | 'checkout';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
