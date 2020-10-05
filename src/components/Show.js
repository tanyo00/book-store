import React from 'react'

export default function Show () {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('/books')
      .then(res => res.json())
      .then(books => {
        setData(books)
        setLoading(!loading)
      })
  }, [])

  return (
    <div className='books-container'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item, index) => {
          return (
            <div className='book' key={item._id}>
              <h1>{item.name}</h1>
              <h3>Price: {item.price} $</h3>
              <p>Author: {item.author}</p>
              <p>Published on: {item.year}</p>
              <p>{item.annotation}</p>
              <p>Contact: {item.phone}</p>
            </div>
          )
        })
      )}
    </div>
  )
}
