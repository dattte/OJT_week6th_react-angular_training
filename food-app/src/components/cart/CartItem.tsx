import { Fragment } from "react";
import Topping from "./topping/Topping";
import classes from "./Cart.module.scss";

function CartItem(props: any) {
  const price = `$${props.price.toFixed(2)}`;

  const foodToppingData = props.topping.map((foodItem: any) => (
    <Topping
      key={foodItem.id}
      id={foodItem.id}
      name={foodItem.name}
      price={foodItem.price}
      parrentKey={props.id}
    />
  ));

  return (
    <Fragment>
      <div id={props.id} className={classes["cart-item"]}>
        <div className={classes["cart-item_image"]}>
          <img src={props.image} alt={props.image} />
        </div>
        <div className={classes["cart-item_price"]}>
          <h3>{props.name}</h3>
          {foodToppingData}
          <div className={classes.action}>
            <button
              className={`${classes.btn} ${classes["btn-minus"]}`}
              onClick={props.onRemove}
            >
              -
            </button>
            <span className={classes.amount}>
              x {props.amount}*{price}
            </span>
            <button
              className={`${classes.btn} ${classes["btn-plus"]}`}
              onClick={props.onAdd}
            >
              +
            </button>
          </div>
          <button
            className={`${classes.btn} ${classes["btn-trash"]} ${classes.trash}`}
            onClick={props.onDelete}
          >
            <img src="images/trash.png" alt="trash" />
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default CartItem;
