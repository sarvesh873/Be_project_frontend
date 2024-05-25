
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
    altText: 'Regulation',
    title: 'Regulation',
    description: 'The NPS is regulated by the Pension Fund Regulatory and Development Authority (PFRDA), a statutory body established by the Government of India. The PFRDA regulates and supervises pension funds, pension fund managers.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/liquidity.svg',
    altText: 'Investment Options',
    title: 'Investment Options',
    description: 'The NPS offers multiple investment options to suit different risk profiles and investment preferences of subscribers. These options include equity funds, corporate bonds, government securities, and alternative investment funds.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/higher-returns.svg',
    altText: 'Returns',
    title: 'Returns',
    description: 'Like any investment product, the performance of these funds are measured in terms of the kind of returns they deliver. Historically, mutual fund returns have been higher than the investment options like Bank FDs, RDs, PPF, etc.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/affordability.svg',
    altText: 'Tax Benefits',
    title: 'Tax Benefits',
    description: 'Contributions made to the NPS are eligible for tax benefits under Section 80CCD of the Income Tax Act, 1961. Additionally, contributions by employers are eligible for tax deductions under Section 80CCD(2).',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/diversification.svg',
    altText: 'Portability',
    title: 'Portability',
    description: 'The NPS is a portable retirement savings scheme, meaning subscribers can continue their NPS accounts even if they change jobs or locations. Subscribers can maintain the same NPS account and investment options throughout their working life.',
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
const NPSAdvantages = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start justify-start py-12 px-10">
      <div className="w-full px-4">
        <h2 className="text-2xl font-semibold mb-6">Advantages of NPS</h2>
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

export default NPSAdvantages;
