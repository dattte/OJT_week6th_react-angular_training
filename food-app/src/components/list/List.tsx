import data from "../../assets/datas/foodList";
import ListItem from "./ListItem";
import classes from "./List.module.scss";
import { Fragment } from "react";

function List(props: any) {
  const foodList = data.map((foodItem: any) => (
    <ListItem
      key={foodItem.id}
      id={foodItem.id}
      name={foodItem.name}
      price={foodItem.price}
      image={foodItem.image}
      topping={foodItem.topping}
      onSetIsValid={props.onSetIsValid}
    />
  ));

  return (
    <Fragment>
      <div className={classes.list}>{foodList}</div>
    </Fragment>
  );
}

export default List;
