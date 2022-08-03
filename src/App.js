import React from "react";
import menuItems from "./data";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import "./styles/styles.css";
import "./styles/navbar.css";
import "./styles/card.css";
import "./styles/media.css";

function App() {
  const [menu, setMenu] = React.useState(menuItems);
  const [categories, setCategories] = React.useState([
    "All",
    ...new Set(menuItems.map((menu) => menu.category)),
  ]);

  function filterCategory(category) {
    category === "All"
      ? setMenu(menu)
      : setMenu(
          menuItems.filter((menuItem) => menuItem.category === category)
        );
  }

  const cardElements = menu.map((menuItem) => (
    <Card key={menuItem.id} menu={menuItem} />
  ));

  return (
    <div className="App">
      <Navbar filterCategory={filterCategory} categories={categories} />
      <section>{cardElements}</section>
    </div>
  );
}

export default App;
