import React from 'react'
import './navbar.css'
import { BsSearch, BsCart } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-title'><h1>Meesho</h1>
                <div className='navbar-title-search'><BsSearch />
                    <input placeholder='Try Saree, Kurti or Search by Product Code' />
                </div>
            </div>
            <div className='navbar-cart'>
                <div className='navbar-download'>
                    <h2>Download App</h2>
                </div>
                <div className='navbar-download'>
                    <h2>Beacome a Supplier</h2>
                </div>
                <div>
                    <h2><Link to='/signup'>Profile</Link></h2>
                </div>
                <div>
                    <h2 ><Link to='/cart'>Cart</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar