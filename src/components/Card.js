import React from "react";
import Image12 from "../images/Image12.png";
import Star from "../images/Star1.png";

export default function Card(props) {
  let badgeText 
  if (props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.item.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
      <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={require(`../images/${props.item.coverImg}`)} className="card-img" alt="image of a person" />
        <div className="star-section">
          <img src={Star} className="star-icon" alt="Star" />

          <span>
            <b className="rating">{props.item.stats.rating}</b>
          </span>
          <span className="review-count gray">({props.item.stats.reviewCount}).</span>
          <span className="country gray">{props.item.location}</span>
        </div>
        <p className="title">{props.item.title}</p>
        <p className="cost">
          <b>From ${props.item.price}</b> / person
        </p>
      </div>
  );
}
