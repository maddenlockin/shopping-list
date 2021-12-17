import React from 'react'

export default function Item({ item, onChange, onDelete }) {
  return (
    <div>
      <button
        type='button'
        className='delete-button'
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
      
    </div>
  )
}
