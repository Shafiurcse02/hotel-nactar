import React from 'react'
import { useSelector } from "react-redux"

const App = () => {

  const products = useSelector(state => state.products)

  return (
    <>
      {products.map(product => <div key={product.id}> {product.name}--{product.price}</div>)
      }
      <p>fjfjdfjdl</p>

    </>
  )
}

export default App