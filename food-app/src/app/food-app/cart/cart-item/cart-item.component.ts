import { Component, Input, OnInit } from "@angular/core";
import { ListService } from "src/app/shared/list.service";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.scss"],
})
export class CartItemComponent implements OnInit {
  @Input() foodCart: any;
  constructor(private listService: ListService) {}

  ngOnInit() {}

  plusCartItem(item: any) {
    this.listService.addCartData(item);
  }

  minusCartItem(item: any) {
    this.foodCart = this.listService.minusCartData(item);
  }

  onChangeAmount(amount, parrentKey, childId) {
    this.listService.changeCartData(amount, parrentKey, childId);
  }

  onDeleteCartData(id: number) {
    this.foodCart = this.listService.deleteCartData(id);
  }
}
