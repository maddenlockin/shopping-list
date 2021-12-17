import React from 'react'
import Item from './Item'

export default function ItemList({ items, handleChangeItem, handleDeleteItem }) {
  return (
    <ul className='item-list'>
      {items.map((item) => (
        <li key={item.id} className='list-item'>
          <Item item={item} onChange={handleChangeItem} onDelete={handleDeleteItem} />
        </li>
      ))}
      
    </ul>
  )
}
