import React, { useState, useEffect } from 'react';
import '../design/Home.css';
import { categories } from '../data';
import MenuItem from './MenuItem';
import Loading from './Loading';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Home'>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1 className='h1'>Gurme Restaurant</h1>
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
