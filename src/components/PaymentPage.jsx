import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import './PaymentPage.css'; // Import component-specific styles
import Navbar from './Navbar.jsx';

const PaymentPage = () => {
    const { cartItems, total } = useCart();

    return (
        <>
        <Navbar/>
        <div className="payment-page">
            <h2>Payment Details</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                    <img src={item.image} alt='img'></img>
                        <span>{item.name} - ${item.price} x {item.quantity}</span>
                    </li>
                ))}
            </ul>
            <p>Total: ${total}</p>
            <form>
                <label>
                    Credit Card Number:
                    <input type="text" />
                </label>
                <label>
                    Expiry Date:
                    <input type="text" />
                </label>
                <label>
                    CVV:
                    <input type="text" />
                </label>
                <Link to="/cart">
                    <button type="submit">Pay Now</button>
                </Link>
            </form>
        </div>
        </>
    );
};

export default PaymentPage;
