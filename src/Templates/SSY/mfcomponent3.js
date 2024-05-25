
import React, { useRef } from 'react';

// Shared Tailwind CSS class strings
const carouselItemClass = 'flex-none w-64 bg-white shadow-lg mx-2 p-4 rounded-lg';
const titleClass = 'font-semibold mb-2';
const textClass = 'text-sm';
const buttonClass = 'text-xl mx-2';

// Carousel item data
const items = [
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/higher-returns.svg',
    altText: 'Interest Rate',
    title: 'Interest Rate',
    description: ' The scheme offers attractive interest rates, which are set by the government and revised quarterly. The interest rate is typically higher than other small savings schemes.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/diversification.svg',
    altText: 'Minimum and Maximum Deposit',
    title: 'Minimum and Maximum Deposit',
    description: 'The minimum deposit amount required to open an SSY account is low, making it accessible to parents from all income groups. However, there is a maximum annual contribution limit per account.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Guardians Role',
    title: 'Guardians Role',
    description: 'The parent or legal guardian acts as the depositor and manages the SSY account on behalf of the girl child until she reaches adulthood.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/affordability.svg',
    altText: 'Girl Childs Identity Proof',
    title: 'Girl Childs Identity Proof',
    description: ' Documents such as birth certificate and identity proof of the girl child are required to open an SSY account.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/liquidity.svg',
    altText: 'Tax Benefits',
    title: 'Tax Benefits',
    description: 'Contributions made towards the SSY account are eligible for tax deductions under Section 80C of the Income Tax Act, up to a specified limit.',
  },
  // Add the rest of the items following the same structure
];

// CarouselItem component
const CarouselItem = ({ imgSrc, altText, title, description }) => (
  <div className={carouselItemClass}>
    <img src={imgSrc} alt={altText} className="h-16 mx-auto mb-4" />
    <h3 className={titleClass}>{title}</h3>
    <p className={textClass}>{description}</p>
  </div>
);

// Main component
const SSYAdvantages = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start justify-start py-12 px-10">
      <div className="w-full px-4">
        <h2 className="text-2xl font-semibold mb-6">Advantages of Sukanya Samriddhi Yojana</h2>
      </div>
      <div ref={carouselRef} className="flex overflow-auto">
        {items.map((item, index) => (
          <CarouselItem key={index} {...item} />
        ))}
      </div>
      <div className="flex items-center justify-center my-6">
        <button className={buttonClass} onClick={() => scroll(-1)}>‹</button>
        <button className={buttonClass} onClick={() => scroll(1)}>›</button>
      </div>
    </div>
  );
};

export default SSYAdvantages;
