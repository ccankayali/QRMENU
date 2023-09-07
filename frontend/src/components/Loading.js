import React from 'react';
import '../design/Loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <img src="https://iili.io/J90lcJf.webp" alt="Restaurant Logo" className='restaurant-logo' />
      <span class="loader"></span>
    </div>
  );
};

export default Loading;
