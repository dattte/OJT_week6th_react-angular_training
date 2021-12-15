import classes from "./Menu.module.scss";

function Menu() {
  return (
    <div className={classes.menu}>
      <nav>
        <ul className={classes["menu-nav"]}>
          <li>
            <a href="/#">Login</a>
          </li>
          <li>
            <a href="/#">
              <img src="images/Logo-full-black.png" alt="logo" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src="images/basket2.png" alt="logo" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
