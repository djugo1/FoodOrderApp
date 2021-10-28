import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import {useRef} from 'react';

function MealItemForm(props) {
  const amountInputRef = useRef();

  function SubmitHandler(event){
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().lenght === 0 || enteredAmountNumber < 1 || enteredAmountNumber>5){
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  }
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button> +Add</button>
    </form>
  );
}

export default MealItemForm;
