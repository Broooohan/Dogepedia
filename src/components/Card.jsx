import React from "react";

function Card(props) {

  var x = `${props.name}`
  
  return (
    <div id={x}>
      <div class="card">
        <img class="card-img-top" src={props.url} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{props.name} ({props.country})</h5>
          <p class="card-text">Height: {props.height} inches<br/>Weight: {props.weight} kg
          </p>
          <p class="card-text">Life span: {props.life}
          </p>
          <a class="btn btn-primary" data-toggle="tooltip" data-placement="left" data-html="true" title={props.temper}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
