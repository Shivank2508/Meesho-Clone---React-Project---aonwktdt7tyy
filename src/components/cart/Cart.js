
import './cart.css'


import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Get the cart information from local storage
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);
    }, []);

    // Function to update the cart information in local storage
    function updateCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);
    }

    // Function to handle the quantity input change
    function handleQuantityChange(index, event) {
        const newCart = [...cart];
        newCart[index].quantity = parseInt(event.target.value);
        updateCart(newCart);
    }

    // Function to handle the remove button click
    function handleRemoveClick(index) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        updateCart(newCart);
    }

    // Calculate the total cost
    const totalCost = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cart.map((item, index) => (
                    <div key={item.id} className="cart-item">
                        <div className="item-info">
                            <img className='item-image' src={item.image} />
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                        </div>
                        <div className="item-controls">
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
            <div className="cart-total">
                <h3>Total Cost:</h3>
                <p>${totalCost}</p>
            </div>
            <button className="checkout-button"><Link to={'/payment'}>Checkout</Link></button>
        </div>
    );
}

export default CartPage;
