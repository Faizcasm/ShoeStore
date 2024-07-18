import React from 'react';
import { useCart } from '../context/CartContext';
import './ShoppingCart.css';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const { cartItems, total, incrementItem, decrementItem } = useCart();
    const navigato=useNavigate()
function paymentss(){
    navigato('/payment')
}
    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>${item.price} x {item.quantity}</p>
                                    <button onClick={() => incrementItem(item.id)}>+</button>
                                    <button onClick={() => decrementItem(item.id)}>-</button>
                                    <button onClick={() => decrementItem(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>Total: ${total}</h3>
                        <button onClick={paymentss}>Proceed to Payment</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;
