
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
    altText: 'Financial Protection',
    title: 'Financial Protection',
    description: 'One of the primary benefits of health insurance is financial protection against unexpected medical expenses. Health insurance helps individuals and families afford necessary healthcare services.',
  },
  {
    imgSrc: 'https://placehold.co/100x100',
    altText: 'Preventive Care',
    title: 'Preventive Care',
    description: ' Many health insurance plans cover preventive care services such as vaccinations, screenings, check-ups, and counseling at little to no cost to the insured individual.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Emergency Medical Care',
    title: 'Emergency Medical Care',
    description: 'Emergency medical care refers to immediate medical treatment provided to individuals who require urgent medical attention due to sudden illness, injury, or life-threatening conditions. ',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Maternity and Newborn Care',
    title: 'Maternity and Newborn Care',
    description: 'Many health insurance plans include coverage for maternity care, prenatal services, childbirth, and newborn care. Maternity coverage helps expectant mothers access prenatal care.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Tax Benefits',
    title: 'Tax Benefits',
    description: 'In some countries, individuals may receive tax benefits or subsidies for purchasing health insurance coverage. Tax deductions or credits may be available for health insurance premiums.',
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
const HIAdvantages = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start justify-start py-12 px-10">
      <div className="w-full px-4">
        <h2 className="text-2xl font-semibold mb-6">Advantages of Health Insurance</h2>
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

export default HIAdvantages;
