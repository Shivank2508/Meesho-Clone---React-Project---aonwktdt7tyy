import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import SubNav from '../SubNavBar/SubNav';
import Product from '../Products/Product';
import ProdDetails from '../ProductDetails/ProdDetails';
import Signin from '../LoginPage/Signin';
import NewUser from '../Register/NewUser';
import Cart from '../Cart/Cart';
import Payment from '../Payment/Payment';
import PageNotFound from '../PageNotFound';
import DataApp from '../DataApp';

const Allrouting = () => {
    return (
        <div>
            <BrowserRouter>
                <DataApp>
                    <Navbar />
                    <SubNav />
                    <Routes>
                        <Route path="signin" element={<Signin />} />
                        <Route path="reg" element={<NewUser />} />
                        <Route path="/" element={<Product/>} />
                        <Route path="/pdetails/:id" element={<ProdDetails/>} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="payment" element={<Payment />} />

                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                </DataApp>
            </BrowserRouter>
        </div>
    )
}

export default Allrouting