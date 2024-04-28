
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
    altText: 'Professionally Managed',
    title: 'Professionally Managed',
    description: 'One of the key benefits of investing in these funds is that your money is managed by professional money managers who have years of investing experience.',
  },
  {
    imgSrc: 'https://placehold.co/100x100',
    altText: 'Liquidity',
    title: 'Liquidity',
    description: 'It is the ease of buying and selling an investment. Mutual Funds offer superior liquidity compared to some of the other instruments as you can buy and sell them anytime you want.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Returns',
    title: 'Returns',
    description: 'Like any investment product, the performance of these funds are measured in terms of the kind of returns they deliver. Historically, mutual fund returns have been higher than the investment options like Bank FDs, RDs, PPF, etc.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Affordability',
    title: 'Affordability',
    description: 'You can start your investments in these funds with as low as ₹500. Therefore, you donot need large sums to start investing.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Diversification',
    title: 'Diversification',
    description: 'As mutual funds invest in a basket of stocks, bonds, etc., you can own a diversified portfolio even with a small investment amount, this helps reduce risk as well.',
  },
  {
    imgSrc: 'https://img.smartspends.com/static/images/etmoneyweb/mfHome/professionally-managed.svg',
    altText: 'Diversification',
    title: 'Diversification',
    description: 'As mutual funds invest in a basket of stocks, bonds, etc., you can own a diversified portfolio even with a small investment amount, this helps reduce risk as well.',
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
const MutualFundAdvantages = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-start justify-start py-12 px-16">
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

export default MutualFundAdvantages;
