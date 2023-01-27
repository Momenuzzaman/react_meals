import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const numbersOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);



    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items]);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numbersOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;