
import React, { useRef } from 'react';

// Shared Tailwind CSS class strings
const carouselItemClass = 'flex-none w-64 bg-white shadow-lg mx-2 p-4 rounded-lg';
const titleClass = 'font-semibold mb-2';
const textClass = 'text-sm';
const buttonClass = 'text-xl mx-2';

// Carousel item data
const items = [
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Global Demand',
    title: 'Global Demand',
    description: 'Gold enjoys widespread demand across various sectors, including jewelry, technology, and central banks reserves. This global demand provides support for gold prices and ensures its continued relevance as an investment asset',
  },
  {
    imgSrc: 'https://placehold.co/100x100',
    altText: 'Liquidity',
    title: 'Liquidity',
    description: 'Gold investments are highly liquid, meaning they can be easily bought or sold in various forms such as physical gold, gold ETFs, or gold futures. This liquidity ensures that investors can quickly convert their gold holdings.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Tangible Asset',
    title: 'Tangible Asset',
    description: 'Physical gold investments provide tangible ownership of the precious metal, offering a sense of security and stability. Unlike paper assets, which are subject to counterparty risk, physical gold represents a direct ownership stake.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Portfolio Insurance',
    title: 'Portfolio Insurance',
    description: 'Gold serves as a form of insurance within an investment portfolio, offering protection against systemic risks, financial crises, and currency devaluation. Holding a portion of ones assets in gold can mitigate the impact of adverse economic events.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Diversification',
    title: 'Diversification',
    description: 'Including gold in an investment portfolio can help diversify risk by reducing overall portfolio volatility and enhancing stability. Golds low correlation with other asset classes such as stocks and bonds means that it can provide a buffer against losses in other investments during market downturns.',
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
const GoldAdvantages = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start justify-start py-12 px-10">
      <div className="w-full px-4">
        <h2 className="text-2xl font-semibold mb-6">Advantages of Mutual Funds</h2>
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

export default GoldAdvantages;
