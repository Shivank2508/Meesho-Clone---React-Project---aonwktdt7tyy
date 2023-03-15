import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"


const Product = () => {
    const temp = useParams();

    const [product, setProduct] = useState({})

    const callApi = () => {
        fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${temp.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }
    useEffect(() => {
        callApi()
    }, [])
    return (
        <div>
            <div>
                <img src={product.image} />
            </div>
        </div>
    )
}

export default Product