import React from "react";
import menuCards from "./data";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import "./styles/styles.css";
import "./styles/navbar.css";
import "./styles/card.css";
import "./styles/media.css";

function App() {
  const [category, setCategory] = React.useState(menuCards);

  function handleClick(event) {
    const { value } = event.target;
    value === "All"
      ? setCategory(menuCards)
      : setCategory(menuCards.filter((menu) => menu.category === value));
  }

  const cardElements = category.map((menu) => (
    <Card key={menu.id} menu={menu} />
  ));

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      <section>{cardElements}</section>
    </div>
  );
}

export default App;
