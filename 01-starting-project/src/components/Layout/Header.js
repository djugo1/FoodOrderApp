import classes from "./Header.module.css";
import React from "react";
import MealsImg from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
          <img src={MealsImg} alt="Table full of food"/>
      </div>
    </React.Fragment>
  );
}

export default Header;
