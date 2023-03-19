import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import './product.css'
import { useNavigate } from 'react-router-dom'


const Product = () => {
    const temp = useParams();
    const navigate = useNavigate()

    const [product, setProduct] = useState({})

    const callApi = () => {
        fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${temp.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }
    // console.log(product.rating.count);
    function handleCart() {
        let tempCart = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem("cart", JSON.stringify([...tempCart, product]))
        navigate('/cart')
    }
    useEffect(() => {
        callApi();

    }, [])
    return (
        <div className='product-container'>
            <div className='product-image'>
                <div className='product-smallimage'>
                    <img src={product.image} />
                </div>
                <div className='product-largeimage'><img src={product.image} />
                    <button onClick={handleCart}>add to cart</button>
                </div>
            </div>
            <div className='product-discription'>
                <div className='product-price'>
                    <h4>{product.title}</h4>
                    <h1>₹{product.price}</h1>
                    <div>Free Delevery</div>
                    <div className='product-rating'> <div><p>{product.rating && product.rating.rate}</p></div><h3> &nbsp;{product.rating && product.rating.count}&nbsp;Review</h3></div>
                </div>
                <div className='product-detail'>
                    <div>
                        <h1>Product detail</h1>
                        <p>{product.description}</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Product