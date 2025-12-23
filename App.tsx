import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { About } from './components/About';
import { JournalGrid } from './components/JournalGrid';
import { JournalDetail } from './components/JournalDetail';
import { CartDrawer } from './components/CartDrawer';
import { Checkout } from './components/Checkout';
import { Assistant } from './components/Assistant';
import { Footer } from './components/Footer';
import { Product, Article, CartItem, ViewState } from './types';

const App: React.FC = () => {
  // State
  const [view, setView] = useState<ViewState>('home');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, activeProduct, activeArticle]);

  // Navigation Handler
  const handleNavigate = (sectionId: string) => {
    if (view !== 'home') {
      setView('home');
      // Allow state update to render home before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Product Interactions
  const handleProductClick = (product: Product) => {
    setActiveProduct(product);
    setView('product');
  };

  const handleAddToCart = (product: Product, size?: string) => {
    const newItem: CartItem = {
      ...product,
      cartId: Math.random().toString(36).substr(2, 9),
      selectedSize: size
    };
    setCart([...cart, newItem]);
    setIsCartOpen(true);
  };

  // Journal Interactions
  const handleArticleClick = (article: Article) => {
    setActiveArticle(article);
    setView('journal');
  };

  // Cart Interactions
  const handleRemoveFromCart = (cartId: string) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  // View Rendering
  const renderView = () => {
    switch (view) {
      case 'product':
        if (activeProduct) {
          return (
            <ProductDetail 
              product={activeProduct} 
              onBack={() => setView('home')}
              onAddToCart={handleAddToCart}
            />
          );
        }
        return null;
      case 'journal':
        if (activeArticle) {
          return (
            <JournalDetail 
              article={activeArticle} 
              onBack={() => setView('home')}
            />
          );
        }
        return null;
      case 'checkout':
        return (
          <Checkout 
            cart={cart} 
            onBack={() => {
              setView('home');
              setIsCartOpen(true);
            }} 
          />
        );
      case 'home':
      default:
        return (
          <>
            <Hero onExplore={() => handleNavigate('products')} />
            <About />
            <ProductGrid onProductClick={handleProductClick} />
            <JournalGrid onArticleClick={handleArticleClick} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans text-kalki-light bg-kalki-void selection:bg-kalki-gold selection:text-kalki-void">
      <Navbar 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)} 
        onNavigate={handleNavigate}
      />
      
      <main>
        {renderView()}
      </main>

      {view === 'home' && <Footer />}

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        onRemove={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setView('checkout');
        }}
      />

      <Assistant />
    </div>
  );
};

export default App;