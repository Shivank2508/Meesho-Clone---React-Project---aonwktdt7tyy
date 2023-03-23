import React, { useContext, useEffect, useState } from 'react'
import "./Payment.css"

import { DataAppContext } from '../DataApp';
import { useNavigate } from 'react-router-dom';


const Payment = () => {

  const navigate = useNavigate();

  const paymentObj = {
    name: '',
    email: '',
    phoneNo: '',
    address: '',
  }

  const uname = useContext(DataAppContext);

  const [payment, setPayment] = useState(paymentObj);

  const [status, setStatus] = useState(false);

  const [formError, setFormError] = useState(paymentObj);

  const handleInput = (e) => {

    let tempObj = {}
    tempObj[e.target.id] = e.target.value;
    setPayment({
      ...payment, ...tempObj
    })
  }

  const paymentFn = () => {

    const ret = validation();
    if(ret)
    {

      setStatus(true);
      localStorage.setItem('payment', JSON.stringify(payment));

      
    }
    if(status)
      {
        alert("Your Order IS Placed!!")
      }

  }

  const validation = () => {
    let errorObj = {}
    
    if(payment.email === ""){
      errorObj.email = "Enter email ";
    }
    if(payment.phoneNo === ""){
      errorObj.phoneNo = "Enter phone number";
    }
    if(payment.address === ""){
      errorObj.address = "Enter address";
    }
    //copy errorobj in formerror state
    setFormError(errorObj);
    // if errorobj is not blank
    if(Object.keys(errorObj).length > 0)
    {
      return false;
    }
    else{
      return true;
    }
  }


  useEffect(() => {
    console.log("payment",payment);

    if(!uname.appState.loginStatus)
    {
      navigate('/signin')
    }

  })


  return (
    
    <div className="payment">
      <h3>Payment Form</h3>
      <div className="payment_input">
        <input type="text" placeholder="Name" id="name" onChange={handleInput} value={uname.appState.username} />
        <input type="text" placeholder="Contact Number"  id="phoneNo" onChange={handleInput} />
        <div className="validation">{formError.phoneNo}</div>
        <input type="text" placeholder="Enter email" id="email" onChange={handleInput} />
        <div className="validation">{formError.email}</div>
        <input type="text" placeholder="User address" id="address" onChange={handleInput} />
        <div className="validation">{formError.address}</div>
      </div>
      <div className="payment_method">
        <div>
          <h5>Select Payment</h5>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">Cash On Devlivery</label>
        </div>
        <button onClick={paymentFn}>Complete Payment</button>

      </div>
    </div>
  )
}

export default Payment