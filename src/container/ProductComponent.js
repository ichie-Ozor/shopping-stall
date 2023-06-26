import React from 'react'
import { useSelector } from 'react-redux'

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.product)
    const renderList = products.map((product) => {
        const {id, title, image, price, category } = product
        return (
            <div className='column' key={id}>
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
              </div>
        )
    })
    
  return (
    <>{renderList}</>
  )
}

export default ProductComponent
