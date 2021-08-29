import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const ProductPage = () => {

    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        return () => {

        }
    }, [ fetchProductWithId, id ])

    if(!product) return <div>Loading Product</div>

    return (
        <div>
            Product Page
            {id}
        </div>
    )
}

export default ProductPage
