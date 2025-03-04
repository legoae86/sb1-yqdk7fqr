import React from 'react';
import Hero from '../components/Hero';
import PromoBar from '../components/PromoBar';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

const promoMessages = [
  "30% OFF ALL OUTERWEAR • LIMITED TIME ONLY",
  "FREE SHIPPING ON ORDERS OVER $100",
  "NEW COLLECTION JUST DROPPED • SHOP NOW",
  "SIGN UP FOR 10% OFF YOUR FIRST ORDER"
];

const HomePage: React.FC = () => {
  const newArrivals = products.filter(product => product.isNew);
  
  return (
    <>
      <Hero />
      <PromoBar messages={promoMessages} />
      
      <FeaturedProducts 
        products={newArrivals}
        title="NEW ARRIVALS"
        subtitle="The latest additions to our collection. Designed with purpose and made to last."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Women's Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-light mb-4">Women's Collection</h3>
                <button className="btn self-start">Shop Now</button>
              </div>
            </div>
            
            <div className="relative h-[500px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Men's Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-light mb-4">Men's Collection</h3>
                <button className="btn self-start">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts 
        products={products}
        title="BEST SELLERS"
        subtitle="Our most popular products based on sales."
      />
      
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Our Commitment to Sustainability</h2>
            <p className="text-gray-400 mb-8">
              We believe in creating products that not only look good but also do good. Our commitment to sustainability means we use eco-friendly materials, ethical manufacturing processes, and minimize waste at every step.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </>
  );
};

export default HomePage;