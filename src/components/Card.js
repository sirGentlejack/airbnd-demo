import React from "react";
import Image from "../images/image 12.png";
import Star from "../images/Star 1.png";

export default function Card() {
  return (
    <section>
      <div className="card">
        <p className="sold">SOLD OUT</p>
        <img src={Image} className="card-img" alt="image of a person" />
        <div className="star-section">
          <img src={Star} className="star-icon" alt="Star" />

          <span>
            <b className="rating">5.0</b>
          </span>
          <span className="review-count gray">(6).</span>
          <span className="country gray">USA</span>
        </div>
        <p className="title">Life lessons with katie Zaferes</p>
        <p className="cost">
          <b>From $136</b> / person
        </p>
      </div>
    </section>
  );
}
