import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { Fragment } from "react";

function Cart(props: any): any {
  const cartCtx = useContext(CartContext);

  const removeFoodListHandler = (id: any) => {
    cartCtx.removeItem(id);
  };
  const deleteFoodListHandler = (id: any) => {
    cartCtx.deleteItem(id);
    console.log(cartCtx.items);
    if (cartCtx.items.length === 1) {
      props.onSetIsInvalid(false);
    }
  };

  const addFoodListHandler = (item: any) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const foodCartData = cartCtx.items.map((foodItem: any) => (
    <CartItem
      key={foodItem.id}
      id={foodItem.id}
      name={foodItem.name}
      image={foodItem.image}
      amount={foodItem.amount}
      price={foodItem.price}
      topping={foodItem.topping}
      onRemove={removeFoodListHandler.bind(null, foodItem.id)}
      onDelete={deleteFoodListHandler.bind(null, foodItem.id)}
      onAdd={addFoodListHandler.bind(null, foodItem)}
    />
  ));

  return <Fragment>{foodCartData}</Fragment>;
}

export default Cart;
