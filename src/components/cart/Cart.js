import React,{useState, useEffect, useContext} from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom';
import { DataAppContext } from '../DataApp';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate();

  const ctotal = useContext(DataAppContext);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Get the cart information from local storage
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);

    if(!ctotal.appState.loginStatus)
    {
      navigate("/signin")
    }
    else{
      console.log("project working");
    }


  }, []);

  // Function to update the cart information in local storage
  const updateCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart(cart);
  }

  // Function to handle the quantity input change
  const handleQuantityChange = (index, event)  => {
    const newCart = [...cart];
    newCart[index].quantity = parseInt(event.target.value);
    updateCart(newCart);
  }

  // Function to handle the remove button click
  const handleRemoveClick = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    updateCart(newCart);
  }

  // Calculate the total cost
  const totalCost = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const checkoutFn = () => {

    ctotal.setAppState({
      ...ctotal.appState,
      totalCount: totalCost, 
    })

  }

  useEffect(() => {

    console.log("hi");

  },[handleRemoveClick])


  return (
    <div className="cart1">
      <h1>Your Cart</h1>
      <div className="cart2">
        {cart.map((item, index) => (
          <div key={item.id} className="cart_id">
              <div className="cart_image">
                <img  src={item.image} />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <div className='items'>
                <input
                  type="number"
                  min="1"
                  onChange={(event) => handleQuantityChange(index, event)}
                />
                <button onClick={() => handleRemoveClick(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total_cost">
        <h3>Total Cost:</h3>
        <p>${totalCost}</p>
      </div>
      <div className="btn">
        <button onClick={checkoutFn}><Link to={'/payment'} className="payment_btn">Checkout</Link></button>
      </div>
    </div>
  );
  
}

export default Cart;