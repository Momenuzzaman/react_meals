import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null)
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-https-12f16-default-rtdb.firebaseio.com/meals.json');
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
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
            setIsLoading(false)
        };
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);
    if (isLoading) {
        return (<section className={classes.mealsLoading}>
            <h4>Loading.....</h4>
        </section >)
    }
    if (httpError) {
        return (<section className={classes.mealsError}>
            <h4>{httpError}</h4>
        </section>)
    }
    const mealsList = meals.map(meal => <MealItem key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description} />);
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;