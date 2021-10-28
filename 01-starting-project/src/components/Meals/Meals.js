import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import React from "react";

function Meals(props){
    return (
        <React.Fragment>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </React.Fragment>
    );
}

export default Meals;