
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
    altText: 'Safety',
    title: 'Safety',
    description: 'Fixed deposits are generally considered safe because they are offered by regulated financial institutions like banks and credit unions. Additionally, in many countries, deposits are insured up to a certain amount by government-backed schemes',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/affordability.svg',
    altText: 'Stability',
    title: 'Stability',
    description: 'The stability of fixed deposits lies in their predetermined interest rates, which remain fixed throughout the tenure of the deposit. This stability ensures that investors can rely on a consistent stream of income without being affected by market fluctuations.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/higher-returns.svg',
    altText: 'Predictable Returns',
    title: 'Predictable Returns',
    description: 'Fixed deposits provide investors with clarity regarding the returns they will receive at maturity since the interest rate is fixed at the time of investment. This predictability helps individuals plan their finances more effectively.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/liquidity.svg',
    altText: 'Liquidity',
    title: 'Liquidity',
    description: 'While fixed deposits are designed to be held until maturity to maximize returns, most banks offer the option of premature withdrawal in case of emergencies. However, premature withdrawal may attract penalties.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/diversification.svg',
    altText: 'Diversification',
    title: 'Diversification',
    description: 'Fixed deposits serve as a valuable component of a diversified investment portfolio, especially for conservative investors or those nearing retirement. By allocating a portion of their funds to fixed-income assets like FDs',
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
const FDAdvantages = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start justify-start py-12 px-10">
      <div className="w-full px-4">
        <h2 className="text-2xl font-semibold mb-6">Advantages of Fixed Deposit</h2>
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

export default FDAdvantages;
