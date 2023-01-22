import React from 'react';
import classes from './MealsSummary.module.css';
const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection
                of available meals and enjoy a delicious lunch of
                dinner at home
            </p>
            <P>
                All our meals are cooked with high-quality
                ingredients, just-in-time and of course by
                experienced chefs!
            </P>
        </section>
    );
};

export default MealsSummary;