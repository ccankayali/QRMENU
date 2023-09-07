import React from 'react';
import '../design/Navbar.css';

function toggleMenu(x) {
  x.classList.toggle("change");
}

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className="container" onClick={(e) => toggleMenu(e.currentTarget)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
