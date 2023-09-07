import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import '../design/Navigate.css';
// import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faArrowUpShortWide} from '@fortawesome/free-solid-svg-icons';

function Navigate() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='Navigate'>
      <div className={`tab ${activeTab === 'Ingredients' ? 'active' : ''} ingredientsTab`} onClick={() => handleTabClick('Ingredients')}>
          <FontAwesomeIcon icon={faPizzaSlice} bounce size="xl" />
      </div>
      <div className={`tab ${activeTab === 'Up' ? 'active' : ''} upTab`} onClick={() => handleTabClick('Up')}>
        <FontAwesomeIcon icon={faArrowUpShortWide} size="xl" />
      </div>
      {/* <div className={`tab ${activeTab === 'Admin' ? 'active' : ''} adminTab`} onClick={() => handleTabClick('Admin')}>
        <FontAwesomeIcon icon={faUser} size="xl" />
      </div> */}
    </div>
  );
}

export default Navigate;
