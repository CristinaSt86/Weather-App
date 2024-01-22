import "./SearchBar.css";
import React, { useState } from "react";

const APIData = {
  key: "519c1407b300028c7ac03d630f5597c6",
  url: "https://api.openweathermap.org/data/2.5/",
};

const SearchBar = (props) => {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  //function for get the value from search input
  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  async function search(e) {
    if (e.key === "Enter") {
      try {
        const response = await fetch(
          `${APIData.url}weather?q=${query}&units=metric&appid=${APIData.key}`
        );
        const jsonData = await response.json();
        // console.log("DATA obj din SearchBar: ", jsonData);
        props.queryObject(jsonData);
        setQuery("");
      } catch (e) {
        console.log("Eroare", e);
      }
    }
  }

  return (
    <input
      placeholder="Search..."
      type="text"
      onKeyDown={search}
      value={query}
      onChange={handleSearchInput}
    />
  );
};

export default SearchBar;
