import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CheckOut from './CheckOut';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [isCheckOut, setIsCheckOut] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    };
    const checkOutHandler = () => {
        setIsCheckOut(true);
    };
    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-https-12f16-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderItems: cartCtx.items
            }),
        });
        setIsSubmitting(false);
        setDidSubmit(true);
    };
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
        </ul>)
    const modalAction = (<div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && (<button className={classes.button} onClick={checkOutHandler}>Order</button>)}
    </div>)
    const cartModalContent = (<>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckOut && <CheckOut onConfirm={submitOrderHandler} onCancel={props.onClose} />}
        {!isCheckOut && modalAction}
    </>)
    const isSubmittingModalContent = <p>Successfully sent the order</p>
    return (
        <Modal onclose={props.onClose}>
            {!isSubmitting && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
        </Modal>
    );
};

export default Cart;