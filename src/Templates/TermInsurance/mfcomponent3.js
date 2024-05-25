
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
    altText: 'Affordability:',
    title: 'Affordability:',
    description: 'Term insurance tends to be more affordable compared to other types of life insurance, such as whole life or universal life policies. Since term insurance provides coverage for a specific period without any cash value component, premiums are typically lower.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/liquidity.svg',
    altText: 'Flexibility',
    title: 'Flexibility',
    description: 'Term insurance policies offer flexibility in terms of coverage duration and coverage amount. Policyholders can choose the duration of the term based on their specific needs, such as the length of a mortgage, the duration of financial support for dependents.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/well-regulated.svg',
    altText: 'Transparent',
    title: 'Transparent',
    description: 'Term insurance policies are straightforward and easy to understand. They provide pure life insurance coverage without any savings or investment component, eliminating complexities associated with cash value accumulation or investment returns.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/higher-returns.svg',
    altText: 'Tax Benefits',
    title: 'Tax Benefits',
    description: 'Premiums paid for term insurance policies may be eligible for tax deductions under Section 80C of the Income Tax Act, up to certain limits. Additionally, the death benefit received by the beneficiaries is typically tax-free under Section 10(10D).',
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
const TIAdvantages = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start justify-start py-12 px-10">
      <div className="w-full px-4">
        <h2 className="text-2xl font-semibold mb-6">Advantages of Term Insurance</h2>
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

export default TIAdvantages;
