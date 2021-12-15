import React, { useState } from "react";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CardProvider";
import List from "./components/list/List";
import Payment from "./components/payment/Payment";
import EmtyCart from "./EmtyCart";
import classes from "./App.module.scss";

function App() {
  const [isValid, setIsValid] = useState(false);
  function switchHandler(value: boolean) {
    setIsValid(value);
  }

  return (
    <div className={classes.App}>
      <Menu />
      <CartProvider>
        <div className={classes["food-body"]}>
          <div className={classes["food-body__list"]}>
            <h2>Food List</h2>
            <div className={classes.list}>
              <List onSetIsValid={switchHandler} />
            </div>
          </div>

          <div className={classes["food-body__cart"]}>
            <h2>Your Cart</h2>
            <div className={classes["cart"]}>
              <div
                className={`${classes["cart-list"]} ${
                  isValid ? `${classes["-invalid"]}` : ""
                }`}
              >
                <EmtyCart />
              </div>

              <div
                className={`${classes["cart-list"]} ${
                  !isValid ? `${classes["-invalid"]}` : ""
                }`}
              >
                <Cart onSetIsInvalid={switchHandler} />
              </div>

              <div className={classes["cart-payment"]}>
                <Payment />
              </div>
            </div>
          </div>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
