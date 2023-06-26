import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.product)   // this gets the info from the store and makes it available for the jsx
    const renderList = products.map((product) => {                       //this splits the data into individual items called product
        const {id, title, image, price, category } = product
        return (
            <div className='column' key={id}>
                <Link to ={`product/${id}`}>
                <div className='cards'>
                  <div className='card'>
                      <div className='image'>
                        <img src={ image } alt={title} />
                      </div>
                      <div className='content'>
                          <div className='header'>{title}</div>
                          <div className='price'>$ {price}</div>
                          <div className='category'>{category}</div>
                      </div>
                  </div>
                </div>
                </Link>
              </div>
        )
    })
    
  return (
    <>{renderList}</>                                                 //this is the jsx that is exported to ProductListing component 
  )
}

export default ProductComponent
