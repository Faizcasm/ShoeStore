import React from 'react';
import './ShoesDisplay.css'; // Import component-specific styles
import { images } from '../assets/assets';
import { useCart } from '../context/CartContext';
import ShoppingCart from './ShoppingCart';
import Navbar from './Navbar';

const ShoesDisplay = () => {
    const shoes = [
        { id: 1, name: 'Running Shoes', price: 75, image: images.shoe1 },
        { id: 2, name: 'Sneakers', price: 60, image: images.shoe2 },
        { id: 3, name: 'High Heels', price: 100, image: images.shoe3 },
        { id: 4, name: 'Sneaker', price: 140, image: images.shoe4 },
        { id: 5, name: 'Running Shoes', price: 753, image: images.shoe1 },
        { id: 6, name: 'Sneakers', price: 630, image: images.shoe2 },
        { id: 7, name: 'High Heels', price: 1030, image: images.shoe3 },
        { id: 8, name: 'Sneaker', price: 1240, image: images.shoe4 },
        { id: 9, name: 'Running Shoes', price: 275, image: images.shoe1 },
        { id: 10, name: 'Sneakers', price: 620, image: images.shoe2 },
        { id: 11, name: 'High Heels', price: 1200, image: images.shoe3 },
    ];

    const { addItem } = useCart();

    return (
        <>
        <Navbar/>
        <div className="main-container">
            <div className="shoes-display">
                {shoes.map(shoe => (
                    <div key={shoe.id} className="shoe-card">
                        <img src={shoe.image} alt={shoe.name} />
                        <h3>{shoe.name}</h3>
                        <p>${shoe.price}</p>
                        <button onClick={() => addItem(shoe)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div className="cart-container">
                <ShoppingCart />
            </div>
        </div>
        </>
    );
};

export default ShoesDisplay;
