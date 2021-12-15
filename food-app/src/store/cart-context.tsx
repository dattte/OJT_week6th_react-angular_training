import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  coupon: 5,
  addItem: (item: any) => {},
  removeItem: (id: any) => {},
  deleteItem: (id: any) => {},
  addCoupon: (coupon: any) => {},
  checkoutCart: () => {},
  changeTopping: (item: any) => {},
});

export default CartContext;
