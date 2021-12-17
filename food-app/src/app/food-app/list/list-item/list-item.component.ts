import { Component, Input, OnInit } from "@angular/core";
import { ListService } from "src/app/shared/list.service";
import { listItem } from "./listItem.model";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
})
export class ListItemComponent implements OnInit {
  @Input() foodList: any;
  cartList = [];

  constructor(private listService: ListService) {}

  ngOnInit() {}

  onAddCart(item: listItem) {
    this.listService.addCartData({ ...item, amount: 1 });
  }
}
