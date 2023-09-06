import React from 'react';
import '../design/Loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <img src="https://iili.io/J9ayEjs.jpg" alt="Restaurant Logo" className='restaurant-logo' />
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
