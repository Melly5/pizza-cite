import React from 'react';
import './HomePage.scss';

export const HomePage = () => {
  const speciesArray = [
    '/files/homepage/olives.png',
    '/files/homepage/cheese.png',
    '/files/homepage/pepper.png',
    '/files/homepage/pepperoni.png',
    '/files/homepage/bacon.png',
    '/files/homepage/chicken.png',
    '/files/homepage/beef.png',
    '/files/homepage/sausages.png'
  ];

  return (
    <div className='wrapper'>
      <ul className='ingredients'>
        {speciesArray.map((image) => (
          <li className='ingredients__item' key={image}>
            <img src={image} alt='' />
          </li>
        ))}
      </ul>
    </div>
  );
};
