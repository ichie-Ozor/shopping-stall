import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'

function ProductListing() {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")  //this gets the info from te external website into this page
        .catch((err) => {
            console.log("Err", err)
        })
        dispatch(setProducts(response.data))   // this sends the info gotten from the website to the store so that other component can have access to it
    }                                          //so as the function is being runned, it sends the data it gets to the store once it is called
                                               //of course we can do this any where we want, in as much the component is linked to the store
    useEffect(() => {
        fetchProducts()                        // This calls the function once the page loads
    }, [])
    console.log("Products",products)
  
  return (
    <div>
      <ProductComponent />
    </div>
  )
}

export default ProductListing
