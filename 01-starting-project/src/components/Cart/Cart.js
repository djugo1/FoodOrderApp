import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  function cartItemRemoveHandler(id){
    cartCtx.removeItem(id);

  }

  function cartItemAddHandler(item){
    cartCtx.addItem({...item,amount:1})
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
        key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove = {cartItemRemoveHandler.bind(null,item.id)}
          onAdd = {cartItemAddHandler.bind(null,item)}
        ></CartItem>
      ))}
    </ul>
  );

  const hasItems = cartCtx.items.length > 0;
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {hasItems && (
          <button onClick={props.onClose} className={classes["button--alt"]}>
            Close
          </button>
        )}
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
