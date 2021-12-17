import { Component, OnInit } from "@angular/core";
import { ListService } from "src/app/shared/list.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  foodCart = [];
  constructor(private listService: ListService) {}

  ngOnInit() {
    this.foodCart = this.listService.getCartData();
  }
}
