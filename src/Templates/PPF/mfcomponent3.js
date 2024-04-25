
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
    altText: 'Tax Benefits',
    title: 'Tax Benefits',
    description: 'Contributions made to PPF are eligible for tax deductions under Section 80C of the Income Tax Act, up to a maximum limit of Rs. 1.5 lakh per financial year. Additionally, the interest earned and the maturity proceeds of PPF are tax-exempt, making it a tax-efficient investment option.',
  },
  {
    imgSrc: 'https://placehold.co/100x100',
    altText: 'Attractive Interest Rates',
    title: 'Attractive Interest Rates',
    description: 'PPF offers competitive interest rates that are set by the government and are typically higher than those offered by savings accounts and fixed deposits. The interest is compounded annually, further enhancing the returns over time.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Safety and Security',
    title: 'Safety and Security',
    description: 'PPF is backed by the Government of India, making it one of the safest investment options available. The sovereign guarantee ensures the safety of the invested capital and interest earned, providing peace of mind to investors.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Partial Withdrawals and Loans',
    title: 'Partial Withdrawals and Loans',
    description: 'From the 7th year onwards, investors can make partial withdrawals from their PPF account, subject to certain conditions. Additionally, loans can be availed against the balance in the PPF account from the 3rd year to the 6th year.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Nomination Facility',
    title: 'Nomination Facility',
    description: 'PPF accounts offer a nomination facility, allowing investors to nominate one or more individuals to receive the proceeds of the account in the event of the investors death. This ensures that the accumulated savings are transferred to the nominee(s) without any hassle.',
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
const PPFAdvantages = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start justify-start py-12 px-10">
      <div className="w-full px-4">
        <h2 className="text-2xl font-semibold mb-6">Advantages of Public Provident Fund </h2>
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

export default PPFAdvantages;
