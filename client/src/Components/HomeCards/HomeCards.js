import React from "react";
import "./HomeCards.css";

function HomeCards(props) {
  return (
    <div className="homeCard">
      {props.children}
    </div>
  );
}

export default HomeCards;
