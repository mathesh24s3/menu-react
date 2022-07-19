import React from "react";

export default function Card({ menu }) {
  return (
    <article className="card">
      <div className="card--img--container">
        <img src={menu.img} className="card--img" />
      </div>

      <div className="card--info">
        <div>
          <h4 className="card--title">{menu.title}</h4>
          <h4 className="price">{menu.price}</h4>
        </div>
        <p className="description">{menu.desc}</p>
      </div>
    </article>
  );
}
