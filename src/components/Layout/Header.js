import React from 'react';
import mealImg from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div>
            <head className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </head>
            <div className={classes['main-image']}>
                <img src={mealImg} alt='A table full of delicious food' />
            </div>
        </div>
    );
};

export default Header;