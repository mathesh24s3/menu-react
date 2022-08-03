import React from "react";

export default function Navbar({ filterCategory , categories }) {
  return (
    <header className="App-header">
      <div>
        <h1 className="header--title">Our Menu</h1>
        <div className="underline"></div>
      </div>
      <nav className="nav--container">
      {categories.map(category => <button className="btn" onClick={()=> filterCategory(category)}>{category}</button>)}
      </nav>
    </header>
  );
}
