import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import img from "./meesho.png"
import search from "./search.png"
import mobile from "./mobile.png"
import profile from "./user.png"
import cart from "./cart.png"
import { Link, useNavigate } from 'react-router-dom'

import { DataAppContext } from '../DataApp'

const Navbar = () => {

    const localContext = useContext(DataAppContext)

    const {appState, setAppState} = localContext

    const {username, loginStatus} = appState;

    const [navCart, setNavCart] = useState(0);

    const navigate = useNavigate();

    const logoutFn = () => {

        setAppState({
            ...appState,
            loginStatus: false,
            username: ''
        })
        navigate('/signin')
    }


    useEffect(() => {

        const cartCount = JSON.parse(localStorage.getItem("cart"))
        // setNavCart(cartCount.length)

    })

    return (
        <>
            <header className='header'>
                <div className="header_left">
                    <div className='h_logo'>
                        <Link to="/"> <img src={img} /></Link>
                    </div>
                    {/* search */}
                    <div className='searchBox'>
                        <div className='searchIcon'>
                            <img src={search} />
                        </div>
                        <input type="text" placeholder="Try Saree,Kurti or Search by Product Code" className="input_search" />
                        <div className="close_Search">
                            {/* <i class="fa-solid fa-xmark"></i> */}
                        </div>
                    </div>
                </div>

                <div className='header_right'>
                    <div className='download_app'>
                        <div className="mobile_icon">
                            <img src={mobile} />
                        </div>
                        <p>Download App</p>
                    </div>

                    <div className="become_supplier">
                        <p>Become a Supplier</p>
                    </div>

                    <div className='profile_cart'>
                        <div className='profile_container'>
                            <div className='profile_icon'>
                                <img src={profile} />
                            </div>
                            
                            {
                                loginStatus ?  
                                <>
                                    <p onClick={logoutFn} >Logout
                                    {loginStatus && <p>hi {username} !</p>}</p>
                                </> 
                                :
                                <>
                                    <Link to="/signin" className="signin">Profile</Link>
                                </>
                            }
                        </div>

                        <div className='cart'>
                            <div className='cart_icon'>
                                <img src={cart} />
                                {
                                    loginStatus && <span>{navCart}</span>
                                }
                                
                            </div>
                            <Link to="/cart" className="cartt"><p>Cart</p></Link>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar