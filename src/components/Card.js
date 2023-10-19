import React from "react";
import Image12 from "../images/Image12.png";
import Star from "../images/Star1.png";

export default function Card(props) {
  return (
    <section>
      <div className="card">
        <p className="sold">SOLD OUT</p>
        {/* <img src={require(`../images/${props.img}`)} className="card-img" alt="image of a person" /> */}
        <div className="star-section">
          <img src={Star} className="star-icon" alt="Star" />

          <span>
            <b className="rating">{props.rating}</b>
          </span>
          <span className="review-count gray">({props.reviewCount}).</span>
          <span className="country gray">{props.location}</span>
        </div>
        <p className="title">{props.title}</p>
        <p className="cost">
          <b>From ${props.price}</b> / person
        </p>
      </div>
    </section>
  );
}
