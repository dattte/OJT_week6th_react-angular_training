import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import data from "../../assets/data/foodList.js";

@Injectable({
  providedIn: "root",
})
export class ListService {
  cartList = [];
  totalAmount = 0;
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  getTotalAmount(data) {
    return this.myMethodSubject.next(data);
  }

  getListData() {
    return data;
  }

  addCartData(item: any) {
    const existingCartItem = this.cartList.find((i: any) => i.id === item.id);

    if (existingCartItem) {
      existingCartItem.amount++;
    } else {
      this.cartList.push(item);
    }
    return this.getTotalAmount(this.caculTotalAmount(this.cartList));
  }

  minusCartData(item: any) {
    const existingCartItem = this.cartList.find((i: any) => i.id === item.id);

    if (existingCartItem.amount === 1) {
      this.cartList = this.cartList.filter((i: any) => i.id !== item.id);
    } else {
      existingCartItem.amount--;
    }
    this.getTotalAmount(this.caculTotalAmount(this.cartList));
    return this.cartList;
  }

  changeCartData(amount, parrentKey, childId) {
    const parrentItem = this.cartList.find((pi) => pi.id === parrentKey);
    const toppingItem = parrentItem.topping.find(
      (ic: any) => ic.id === childId
    );
    toppingItem.amount = amount;

    let icAmount = 0;
    let ipAmount = 0;
    this.cartList.map((ip) => {
      ip.topping.map((ic: any) => {
        return (icAmount += ic.price * ic.amount);
      });
      return (ipAmount += ip.price * ip.amount);
    });

    const updatedTotalAmount = ipAmount + icAmount;
    return this.getTotalAmount(updatedTotalAmount);
  }

  deleteCartData(id: number) {
    this.cartList = this.cartList.filter((item: any) => item.id !== id);
    this.getTotalAmount(this.caculTotalAmount(this.cartList));
    return this.cartList;
  }

  getCartData() {
    this.getTotalAmount(this.caculTotalAmount(this.cartList));
    return this.cartList;
  }

  caculTotalAmount(cartList) {
    let icAmount = 0;
    let ipAmount = 0;
    cartList.map((ip: any) => {
      ip.topping.map((ic: any) => {
        icAmount += ic.price * ic.amount;
      });
      ipAmount += ip.price * ip.amount;
    });

    const updatedTotalAmount = ipAmount + icAmount;
    return updatedTotalAmount;
  }

  checkoutTotalAmount(coupon, totalAmount) {
    const updatedTotalAmount = totalAmount - (totalAmount * coupon) / 100;
    return updatedTotalAmount;
  }
}
