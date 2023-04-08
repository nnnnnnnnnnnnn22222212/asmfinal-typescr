import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = (props) => {
   
    
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        setProduct(props.products.find(product => product.id == id))
    }, [props])
    return (
        <div>
            <h1>Product Detail</h1>
            <img src={product?.image.file.thumbUrl} alt="" />
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Desc: {product?.desc}</h3>
            <h3>Category: {product?.category}</h3>
        </div>
    )
}

export default ProductDetailPage