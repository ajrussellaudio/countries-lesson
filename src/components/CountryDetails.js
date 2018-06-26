import React from "react";
import "./CountryDetails.css";

const CountryDetails = props => {
  if (!props.country) return null;
  return (
    <div>
      <h1>{props.country["im:name"].label}</h1>
      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>
      <img
        className="flag"
        src={props.country.flag}
        alt={`Flag of ${props.country.name}`}
      />
    </div>
  );
};

export default CountryDetails;
