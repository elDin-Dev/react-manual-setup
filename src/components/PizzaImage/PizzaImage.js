import React from 'react';
import classes from './PizzaImage.css'
import PizzaImage from '../../assets/pizza.jpg'
const pizzaImage = (props) => {
    return (
        <div className={classes.PizzaImage}>
            <img src = {PizzaImage} className={classes.PizzaImage} />
        </div>
    )
}

export default pizzaImage;

