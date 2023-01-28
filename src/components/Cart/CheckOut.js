import React, { useRef } from 'react';
import classes from './CheckOut.module.css';


const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const CheckOut = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFinite(enteredPostalCode);
    };
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="Street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};
export default CheckOut;