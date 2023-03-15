import React, { useEffect, useState } from 'react'
import './products.css'
import { Link } from "react-router-dom"

const Products = () => {
    const [products, setProducts] = useState([])

    const callApi = () => {
        fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
            .then(res => res.json())
            .then(data => { setProducts(data), console.log(data) })
    }

    useEffect(() => {
        callApi();
    }, [])
    return (
        <div className='products-container'>
            <div className='products-main'>
                {
                    products && products.map((item) => (
                        <>
                            <div className='products-map'>

                                <img src={item.image} />
                                <p>{item.title}</p>
                                <h3>₹{item.price}<span>onwards</span></h3>
                                <div><p>{item.rating.rate}</p> <h5>{item.rating.count}Review</h5> </div>
                                <Link to={`/product/${item.id}`}><button className='btn'>Go to Product</button></Link>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Products