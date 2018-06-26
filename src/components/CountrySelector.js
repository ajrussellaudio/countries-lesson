import React from "react";

class CountrySelector extends React.Component {
  render() {
    const countryListItems = this.props.countries.map((country, index) => (
      <option key={country.alpha2Code} value={index}>
        {country.name}
      </option>
    ));
    return (
      <select onChange={this.props.onSelect}>
        <option hidden selected>
          Select a country...
        </option>
        {countryListItems}
      </select>
    );
  }
}

export default CountrySelector;
