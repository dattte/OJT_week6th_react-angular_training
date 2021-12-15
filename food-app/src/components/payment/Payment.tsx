import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Payment.module.scss";

const Payment = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const addCouponToCheckout = (coupon: any) => {
    cartCtx.addCoupon(coupon.target.value);
  };

  const checkout = () => {
    cartCtx.checkoutCart();
  };

  return (
    <div className={classes.payment}>
      <div className={classes["payment-info"]}>
        <div className={classes["payment-info__delivery"]}>
          <h2>DELIVERY ADDRESS</h2>
          <p>46 vale roadd street</p>
        </div>
        <div className={classes["payment-info__card"]}>
          <h2>PAYMENT CARD NUMBER</h2>
          <p>****************1231</p>
        </div>
      </div>

      <div className={classes["payment-coupon"]}>
        <h2>APPLY COUPON</h2>
        <select name="coupon" id="coupon" onChange={addCouponToCheckout}>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
        </select>
      </div>
      <div className={classes["payment-checkout"]}>
        <button
          className={`${classes.btn} ${classes["btn-checkout"]}`}
          onClick={checkout}
        >
          Checkout
        </button>
        <p>{totalAmount}</p>
      </div>
    </div>
  );
};

export default Payment;
