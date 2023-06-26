import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeselectedProduct } from '../redux/actions/productActions'

function ProductDetails() {
    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product
    const { productId } = useParams()
    const dispatch = useDispatch()
    console.log(product)

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)       //this gets the individual item from the external site using this api
        .catch((err) => {
            console.log("Err", err)
        })
        dispatch(selectedProduct(response.data))                    // this sends it to the store to update the state
    }
    useEffect(() => {                                              
        if(productId && productId !== "") fetchProductDetail()
        return () => {
          dispatch(removeselectedProduct())
        }
    }, [productId])
  return (
    <div className='container'>
      {Object.keys(product).length === 0 ? (<div>...loading</div>) : 
      (
      <div className='segment'>
        <div className='ui__column'>
          <div className='ui__vertical'>And</div>
          <div className='middle__row'>
            <div className='column-lp'>
              <img className='ui__img' src={image} alt='' />
            </div>
            <div className='column-p'>
              <h1>{title}</h1>
              <h2>
                <a className='ui__label' href=''>${price}</a>
              </h2>
              <h3 className='ui__header'>{category}</h3>
              <p>{description}</p>
              <div className='ui__vetical- button' tabIndex={0}>
                <div className='hidden-content'>
                  <i className='shop__icon'></i>
                </div>
                <div className='visible-contnet'>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default ProductDetails
