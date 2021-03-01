import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, players) => total + players.salary, 0);

    let playerName = '';
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        playerName = playerName + ' ' + player.name;
        
    }

    return (
        <div className="cart-info">
            <h2>Selection Summary</h2>
            <h3>Total Player: 15</h3>
            <h4>Total {cart.length} Player Selected</h4>
            <div className="selected-player">
                <h4>Selected: { playerName}</h4>
            </div>
            <h4>Total Budget: $ {total}</h4>
            <button className="submit-btn">Submit</button>
        </div>
    );
};

export default Cart;