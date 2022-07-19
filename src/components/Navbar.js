import React from "react";

export default function Navbar({ handleClick }) {
  return (
    <header className="App-header">
      <div>
        <h1 className="header--title">Our Menu</h1>
        <div className="underline"></div>
      </div>
      <nav>
        <ul className="nav--list--container">
          <li>
            <input type="button" onClick={handleClick} value="All" />
          </li>
          <li>
            <input type="button" onClick={handleClick} value="Breakfast" />
          </li>
          <li>
            <input type="button" onClick={handleClick} value="Lunch" />
          </li>
          <li>
            <input type="button" onClick={handleClick} value="Shakes" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
