import React, { useState } from 'react'
import './Payment.css'

const Payment = () => {

    const paymentobj = {
        name: '',
        phone: '',
        address: '',
    }
    const [status, setStatus] = useState(false)

    function handlepayment() {
        setStatus(true)
    }
    return (
        <div className='payment-container'>
            <div className='payment-main'>
                <h1>Payment</h1>
                <div className='payment-input'>
                    <input type='text' placeholder='Name' />
                    <input type='number' placeholder='phone No.' />
                    <input type='text' placeholder='address' />
                    <h2>cost -$109.95</h2>
                    <button onClick={handlepayment}>Payment</button>
                </div>
                <>{
                    status && <h1>Order Placed</h1>
                }</>
            </div>
        </div>
    )
}

export default Payment