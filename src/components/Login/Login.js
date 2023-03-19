import React, { useEffect, useState } from 'react'
import '../Signup/signup.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
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
            const loggedUser = JSON.parse(localStorage.getItem("users"))
            for (let i = 0; i < loggedUser.length; i++) {
                if (loggedUser[i].email === signupstate.email && loggedUser[i].password === signupstate.password) {
                    navigate('/')
                }
            }
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
        console.log(signupstate.email + ' ' + signupstate.password)
    }, [signupstate])
    return (
        <div className='signup-container'>
            <div className='signup-main'>
                <h1 className='signup-div'>Login form</h1>
                <h3 className='signup-div'>Don't Have Account <Link to='/signup'>Signup</Link></h3>
                <input className='signup-div' type='text' placeholder='Enter your email' id='email' onChange={handleInput} />
                <div>{signuperror.email}</div>
                <input className='signup-div' type='password' placeholder='Enter password' id='password' onChange={handleInput} />
                <div>{signuperror.password}</div>
                <button className='signup-div' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login