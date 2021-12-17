import { Component, OnInit } from "@angular/core";
import { ListService } from "src/app/shared/list.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  foodList: any[] = [];
  constructor(private listService: ListService) {}

  ngOnInit() {
    this.foodList = this.listService.getListData();
  }
}
