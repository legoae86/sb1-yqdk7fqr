import React, { useEffect, useState } from 'react';

interface PromoBarProps {
  messages: string[];
}

const PromoBar: React.FC<PromoBarProps> = ({ messages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-white text-black py-2 overflow-hidden">
      <div className="marquee">
        <div className="marquee-content flex">
          {[...messages, ...messages].map((message, index) => (
            <div key={index} className="mx-4 text-sm font-medium tracking-wider">
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoBar;