import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [filter, setFilter] = useState<ProductCategory | 'All'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories = ['All', ...Object.values(ProductCategory)];

  return (
    <section id="products" className="py-32 px-8 max-w-7xl mx-auto bg-kalki-void">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-kalki-light mb-4">Artifacts</h2>
          <p className="text-kalki-dim font-light tracking-wide">Tools for the ascended mind.</p>
        </div>
        
        <div className="flex gap-8 mt-8 md:mt-0 overflow-x-auto w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as ProductCategory | 'All')}
              className={`text-xs uppercase tracking-[0.2em] pb-2 transition-all whitespace-nowrap ${
                filter === cat 
                  ? 'text-kalki-gold border-b border-kalki-gold' 
                  : 'text-kalki-dim/50 hover:text-kalki-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => onProductClick(product)} 
          />
        ))}
      </div>
    </section>
  );
};