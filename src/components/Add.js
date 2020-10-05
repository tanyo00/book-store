import React from 'react'

export default function Add () {
  const [state, setState] = React.useState({
    name: '',
    author: '',
    year: '',
    price: '',
    annotation: '',
    phone: ''
  })

  const handleName = e => {
    setState({ ...state, name: e.target.value })
  }

  const handleAuthor = e => {
    setState({ ...state, author: e.target.value })
  }

  const handleYear = e => {
    setState({ ...state, year: e.target.value })
  }

  const handlePrice = e => {
    setState({ ...state, price: e.target.value })
  }

  const handleAnn = e => {
    setState({ ...state, annotation: e.target.value })
  }

  const handlePhone = e => {
    setState({ ...state, phone: e.target.value })
  }

  const isEmpty = field => field === '' || field === null

  const sendBook = () => {
    let values = Object.values(state).some(isEmpty)

    if (values === false) {
      fetch('/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      })
        .then(res => res.json())
        .then(data => console.log(data))
      window.location.reload(true)
    } else {
      console.log('please fill all the inputs!')
    }
  }

  return (
    <div className='add-book-page-container'>
      <div className='add-form'>
        <h1>Add book</h1>
        <input placeholder='Name' type='text' onChange={handleName} />
        <input placeholder='Author' type='text' onChange={handleAuthor} />
        <input
          placeholder='Year of publishing'
          type='number'
          onChange={handleYear}
        />
        <input placeholder='Price' type='number' onChange={handlePrice} />
        <textarea placeholder='Annotation' type='text' onChange={handleAnn} />
        <input placeholder='Phone number' type='phone' onChange={handlePhone} />
        <button onClick={sendBook} type='submit'>
          Add
        </button>
      </div>
    </div>
  )
}
