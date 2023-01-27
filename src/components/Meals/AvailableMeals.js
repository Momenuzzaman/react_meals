import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-https-12f16-default-rtdb.firebaseio.com/meals.json');
            const responseData = await response.json();

            const loadMeals = [];
            for (let key in responseData) {
                loadMeals.push({
                    id: key,
                    name: responseData[key].name,
                    price: responseData[key].price,
                    description: responseData[key].description
                });
            }
            setMeals(loadMeals);
        };
        fetchMeals();
    }, []);

    const mealList = meals.map(meal => <MealItem key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description} />);
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;