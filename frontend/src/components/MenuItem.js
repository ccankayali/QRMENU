import React from 'react'

const MenuItem = ({ item }) => {
  return (
    <div className='single-menu-item'>
      <div className='menu-item-header'>
    <p className='menu-item-name'>{item.name}</p>
    <p className='menu-item-price'>{item.price} TL</p>
  </div>
  <div className='menu-description'>
  {item.description && (
        <p className='menu-item-description'>{item.description}</p>
      )}
  </div>     
</div>
  )
}

export default MenuItem
