import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FoodAppComponent } from "./food-app/food-app.component";
import { MenuComponent } from "./food-app/menu/menu.component";
import { ListComponent } from "./food-app/list/list.component";
import { CartComponent } from "./food-app/cart/cart.component";
import { CartItemComponent } from "./food-app/cart/cart-item/cart-item.component";
import { ListItemComponent } from "./food-app/list/list-item/list-item.component";
import { CommonModule } from "@angular/common";
import { PaymentComponent } from "./food-app/payment/payment.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FoodAppComponent,
    MenuComponent,
    ListComponent,
    CartComponent,
    CartItemComponent,
    ListItemComponent,
    PaymentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
