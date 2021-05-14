import React, { useState, useEffect } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Card from "./Card";
import axios from "axios";
import Filter from "./Filter";
import Return from "./Return";
import krishanu from "../images/krishanu.jpeg";
import KK1 from "../images/KK1.jpeg"

function App() {
  // const [css , setCss] = React.useState(true)

  // function callCss() {
  //     if (css === false) {
  //         setCss(true);
  //     }else if (css === true) {
  //         setCss(false);
  //     }
  // }

  //api

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((result) => setData(result.data));
  }, []);

  function createCard(dogData) {
    return (
      <Card
        name={dogData.name}
        temper={dogData.temperament}
        url={dogData.image.url}
        life={dogData.life_span}
        country={dogData.origin}
        height={dogData.height.metric}
        weight={dogData.weight.metric}
        key={dogData.id}
      />
    );
  }

  return (
    <>
      <Section />
      <Heading />
      <Filter name={data} />
      <div className="box">{data.map(createCard)}</div>
      {/* <button type="button" class="btn btn-outline-warning" onClick={callCss}>Warning</button> */}
      <div className="search" id="kk1">
        <div class="card">
          <img class="card-img-top" src={KK1} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Krishanu Saha (India)</h5>
            <p class="card-text">
              Height: 68-70 inches
              <br />
              Weight: 70-80 kg
            </p>
            <p class="card-text">Life span: 80-100 years</p>
            <a
              class="btn btn-primary"
              data-toggle="tooltip"
              data-placement="left"
              data-html="true"
              title="Friendly, has a gf, flop jokes, reliable, will keep you company for football"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Return />
    </>
  );
}

export default App;
