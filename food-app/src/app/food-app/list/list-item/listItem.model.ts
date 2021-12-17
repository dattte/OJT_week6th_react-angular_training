export class listItem {
  public id: number;
  public name: string;
  public image: string;
  public price: number;
  public amount: number;

  constructor(
    id: number,
    name: string,
    image: string,
    price: number,
    amount: number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.amount = amount;
  }
}
