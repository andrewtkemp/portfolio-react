import React from "react";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    ><p>this is supposed to be a card</p>
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default Card;
