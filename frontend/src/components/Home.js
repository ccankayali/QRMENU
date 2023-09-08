import React, { useState, useEffect } from 'react';
import '../design/Home.css';
import { categories } from '../data';
import MenuItem from './MenuItem';
import Loading from './Loading';
import '../design/LoginScreen.css'
import Navigate from './Navigate';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Home'>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="log-screen">
          <img src="https://iili.io/J90lcJf.webp" alt="Restaurant Logo" className='log-logo' />
              <div className='log-text'>
              <h1 className='log-welcome'>Hoş Geldiniz!</h1>
              <p className='log-p'>Menüyü görmek için yukarı kaydırın.</p>
              </div>
          </div>
          <div className='menu-categories'>
            {categories.map((category, index) => (
              <div
                key={index}
                className={`menu-category bg-${category.bg}`}
              >
                <h2 className='category-name'>{category.name}</h2>
                <img src={category.image} alt='' className='category-item-img' />
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <MenuItem item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
