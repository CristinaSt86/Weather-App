import "./Card.css";
import SearchBar from "../SearchBar/SearchBar";
import Degrees from "../Degrees/Degrees";
import Info from "../Info/Info";
import React, { useState } from "react";

const Card = () => {
  const [data, setData] = useState({});
  const onQueryObject = (jsonData) => {
    // console.log("DATA obj din CARD:", jsonData);
    setData(jsonData);
  };

  return (
    <div className="container">
      <SearchBar queryObject={onQueryObject} />
      <Info infoData={data} />
      <Degrees degree={data} />
      <div className="weather-status">Sunny</div>
    </div>
  );
};

export default Card;
