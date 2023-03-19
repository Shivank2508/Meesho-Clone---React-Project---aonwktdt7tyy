import React, { useEffect, useState } from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const signupObj = {
        email: '',
        password: '',
    };
    const [signupstate, setSignupState] = useState(signupObj)
    const [signuperror, setSignuperror] = useState(signupObj)
    const [status, setStatus] = useState(false)

    function handleInput(e) {
        const tempObj = {}
        tempObj[e.target.id] = e.target.value
        setSignupState({
            ...signupstate, ...tempObj
        })
    }
    function handleSubmit(e) {
        e.preventDefault(e)
        const st = validation();
        if (st) {
            setStatus(true);
            let temp = JSON.parse(localStorage.getItem('users')) || [];
            localStorage.setItem("users", JSON.stringify([...temp, signupstate]))
            navigate('/login')
        }
    }

    function validation() {
        const errorObj = {}
        var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailPattern.test(signupstate.email)) {
            errorObj.email = "Email Format is incorrect"
        }
        if (signupstate.password === "") {
            errorObj.password = 'Password is empty'
        }

        setSignuperror(errorObj)

        if (Object.keys(errorObj).length > 0) {
            return false
        } else {
            return true
        }
    }

    useEffect(() => {
        let temp = localStorage.getItem('users');
        console.log(JSON.parse(temp));
    }, [status])
    return (
        <div className='signup-container'>
            <div className='signup-main'>
                <h1 className='signup-div'>Signup form</h1>
                <h3 className='signup-div'>Already have Account <Link to='/login'>Login</Link></h3>
                <input className='signup-div' type='text' placeholder='Enter your email' id='email' onChange={handleInput} />
                <div>{signuperror.email}</div>
                <input className='signup-div' type='password' placeholder='Enter password' id='password' onChange={handleInput} />
                <div>{signuperror.password}</div>
                <button className='signup-div' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Signup