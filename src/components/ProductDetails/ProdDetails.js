import React from 'react'
import "./ProdDetails.css"
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const ProdDetails = () => {

  const ng = useNavigate();

  const temp = useParams();
  console.log(temp.id);

  const [product, setProduct] = useState({});
  console.log(product);

  const fetchAPI = async (pId) => {

    const res = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${pId}`)
    const data1 = await res.json()
    
    setProduct(data1)

  }

  const addCartFn = () => {

    let tempCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem("cart", JSON.stringify([...tempCart, product]))
    ng('/cart')

  }



  useEffect(() => {

    fetchAPI(temp.id);

  }, [temp.id])


  return(
    <section className='main_product'>
      <div className="prod_image">
        <img src={product.image}  />
      </div>
      <div className="prod_image1">
        <img src={product.image}/>
        <button onClick={addCartFn}>Add to Cart</button>
      </div>
      <div>
        <div className="prod_details">
          <p className='pp'>{product.title}</p>
          <h3> ₹ {product.price}</h3>
          <div className="rtt">
            <h3> {product.rating && product.rating.rate}</h3>
            <p> {product.rating && product.rating.count} Reviews</p>
          </div>
        </div>  
        <div className="prod_details">
          <h3>Select Size</h3>
          <button>Free Size</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>   
        <div className="prod_details">
          <h3> Product Details</h3>
          <p>Category : {product.category}</p>
          <p>Name : {product.title}</p>
          <p>{product.description}</p>
        </div>    
      </div>  

    </section>
  )
}

export default ProdDetails