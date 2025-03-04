import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you would send this to your API
    }
  };
  
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Join Our Newsletter</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          
          {isSubmitted ? (
            <div className="bg-zinc-800 p-4 rounded">
              <p className="text-white">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 bg-zinc-800 text-white placeholder-gray-500 focus:outline-none"
              />
              <button 
                type="submit" 
                className="btn"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;