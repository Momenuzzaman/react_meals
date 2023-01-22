import React from 'react';
import CartContext from './cart-context';
const CartProviders = (props) => {
    const addItemToCartHandler = (items) => { };
    const removeItemFromCartHandler = (id) => { }
    const cartContext = {
        items: [],
        totalItems: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    return (
        <div>
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
        </div>
    );
};

export default CartProviders;