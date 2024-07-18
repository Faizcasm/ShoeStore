import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShoesDisplay from './components/ShoesDisplay';
import ShoppingCart from './components/ShoppingCart';
import PaymentPage from './components/PaymentPage';
import './App.css';

const App = () => {
    return (
      <>
      
        <div className="app">
          
           <Routes>
                <Route exact path="/" element={<ShoesDisplay/>} />
                {/* <Route path="/cart" element={<ShoppingCart/>} /> */}
                <Route path="/payment" element={<PaymentPage/>} />
                </Routes>
        </div>
        </>
    );
};

export default App;