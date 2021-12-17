import React, { useReducer } from 'react'

//initialize items in list
const initItems = [
  { id: 0, text: 'flour', done: false },
  { id: 1, text: 'oat milk', done: false },
  { id: 2, text: 'baking soda', done: false },
  { id: 3, text: 'maple syrup', done: false },
];

const nextId = 3

//create reducer function
function itemsReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case 'change': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task
        }
        return item
      })
    }
    case 'delete': {
      return items.filter((item) => item.id !== action.id)
    }
    default: {
      throw Error(`unknown action: ${action.type}`)
    }
  }
}

export default function Shopping() {
  const [items, dispatch] = useReducer(itemsReducer, initItems)

  const handleAddItem = (text) => {
    dispatch({
      type: 'add',
      id: nextId + 1,
      text
    })
  }

  const handleChangeItem = (text) => {
    dispatch({
      type: 'change',
      task
    })
  }
  const handleDeleteItem = (text) => {
    dispatch({
      type: 'delete',
      id: taskId
    });
  };

  return (
    <div>
      
    </div>
  )
}
