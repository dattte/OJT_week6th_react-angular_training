import ListItemForm from "./ListItemForm";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import classes from "./List.module.scss";

function ListItem(props: any) {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount: any) => {
    props.onSetIsValid(true);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image,
      topping: props.topping,
    });
  };

  return (
    <div id={props.id} className={classes["list-item"]}>
      <img src={props.image} alt={props.image} />
      <ListItemForm onAddToCart={addToCartHandler} />
    </div>
  );
}

export default ListItem;
