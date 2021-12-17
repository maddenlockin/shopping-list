import React from 'react'

export default function AddItem({ handleAddItem }) {
  const [text, setText] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault()
    setText('')
    handleAddItem(text)
  }

  return (
    <form onSumbit={handleSumbit} className='add-form'>
      <input
        className='add-item'
        placeholder='new item'
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <button
        type='submit'
        className='add-item-button'
      >
        Add Item
      </button>
    </form>
  )
}
