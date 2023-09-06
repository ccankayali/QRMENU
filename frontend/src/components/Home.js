import React from 'react';
import '../design/Home.css';
import { categories } from '../data';
import MenuItem from './MenuItem';

function Home() {
  return (
    <div className='Home'>
      <h1 className='h1'>Restoran Menüsü</h1>
      <div className='menu-categories'>
        {categories.map((category, index) => (
          <div
            key={index}
            className={
              category.bg === 'dark'
                ? 'menu-category bg-dark'
                : 'menu-category bg-light'
            }
          >
            <h2>{category.name}</h2>
            <img src={category.image} alt='' className='category-item-img'></img>
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
  );
}

export default Home;
