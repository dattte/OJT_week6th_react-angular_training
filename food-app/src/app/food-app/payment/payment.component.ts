import { Component, OnDestroy, OnInit } from "@angular/core";
import { ListService } from "src/app/shared/list.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  totalAmount: number;
  selectedCoupon = 5;
  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.myMethod$.subscribe((data) => {
      this.totalAmount = data;
    });
  }

  addCouponToCheckout(coupon) {
    this.selectedCoupon = coupon;
  }

  onCheckout() {
    this.totalAmount = this.listService.checkoutTotalAmount(
      this.selectedCoupon,
      this.totalAmount
    );
  }
}
