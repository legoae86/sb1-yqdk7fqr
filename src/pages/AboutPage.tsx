import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light mb-8 text-center">About Us</h1>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Our Story" 
              className="w-full h-auto mb-8"
            />
            
            <h2 className="text-2xl font-light mb-4">Our Story</h2>
            <p className="text-gray-400 mb-4">
              MONOCHROME was founded in 2020 with a simple mission: to create timeless, minimalist clothing that transcends trends and seasons. We believe in the power of simplicity and the elegance of essential pieces that form the foundation of a versatile wardrobe.
            </p>
            <p className="text-gray-400 mb-4">
              Our journey began when our founder, a former fashion industry veteran, became disillusioned with the fast fashion cycle and its impact on both creativity and the environment. The vision was clear: create a brand that celebrates quality over quantity, timelessness over trends, and conscious consumption over excess.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-900 p-6">
                <h3 className="text-xl font-light mb-3">Quality</h3>
                <p className="text-gray-400">
                  We source the finest materials and work with skilled artisans to create pieces that are built to last.
                </p>
              </div>
              <div className="bg-zinc-900 p-6">
                <h3 className="text-xl font-light mb-3">Sustainability</h3>
                <p className="text-gray-400">
                  We're committed to ethical production and reducing our environmental footprint at every step.
                </p>
              </div>
              <div className="bg-zinc-900 p-6">
                <h3 className="text-xl font-light mb-3">Timelessness</h3>
                <p className="text-gray-400">
                  We design pieces that transcend seasons and trends, creating a wardrobe that remains relevant year after year.
                </p>
              </div>
            </div>
            <p className="text-gray-400">
              At MONOCHROME, we believe that true style is about finding pieces that resonate with your personal aesthetic and lifestyle. Our collections are designed to be mixed, matched, and styled in countless ways, allowing you to express your individuality while maintaining a cohesive look.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4">Our Commitment to Sustainability</h2>
            <p className="text-gray-400 mb-4">
              We recognize the fashion industry's significant impact on the environment and are committed to doing better. Our sustainability journey is ongoing, with continuous improvements in our materials, production processes, and business practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="text-lg font-light mb-2">Materials</h3>
                <p className="text-gray-400">
                  We prioritize organic, recycled, and responsibly sourced materials that minimize environmental impact while maximizing quality and comfort.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Production</h3>
                <p className="text-gray-400">
                  We partner with ethical factories that provide fair wages and safe working conditions. We visit our production facilities regularly to ensure our standards are maintained.
                </p>
              </div>
            </div>
            <p className="text-gray-400">
              We believe transparency is key to accountability. We're committed to sharing our progress, challenges, and goals as we work toward a more sustainable future.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-light mb-4">Join Our Journey</h2>
            <p className="text-gray-400 mb-6">
              We're building more than just a clothing brand—we're creating a community of like-minded individuals who value quality, sustainability, and timeless style. We invite you to join us on this journey.
            </p>
            <div className="flex justify-center">
              <button className="btn">Shop Our Collection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;