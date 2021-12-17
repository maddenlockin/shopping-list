import React, { useState } from 'react'

export default function Item({ item, onChange, onDelete }) {
  const [editing, setEditing] = useState(false)

  let itemText
  if (editing) {
    itemText = (
      <>
        <input
          value={item.text}
          onChange={({ target }) => {
            onChange({
              ...item,
              text: target.value
            })
          }}
        />
        <button
          type='button'
          className='save-change-button'
          onClick={() => setEditing(false)}
        >
          Save Edit
        </button>
      </>
    )
  } else {
    itemText = (
      <>
        <p className="item-text">{item.text}</p>
        <button 
          type="button"
          className='change-button'
          onClick={() => setEditing(true)}
        >
          Edit Item
        </button>
      </>
    );
  }


  return (
    <div>
      <input
        type='checkbox'
        checked={item.done}
        onChange={({ target }) => {
          onChange({
            ...item,
            done: target.checked,
          })
        }}
      />
      {itemText}
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
