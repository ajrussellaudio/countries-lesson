import React from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetails from "../components/CountryDetails";

class CountriesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedCountry: ""
    };
    this.handleCountrySelect = this.handleCountrySelect.bind(this);
  }

  componentDidMount() {
    console.log("component did mount...");
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then(res => res.json())
      .then(countries => this.setState({ countries: countries }));
    // const request = new XMLHttpRequest();
    // request.open("GET", url);
    // request.addEventListener("load", () => {
    //   if (request.status !== 200) return;
    //   const countries = JSON.parse(request.response);
    //   this.setState({countries: countries});
    // });
    // request.send();
  }

  handleCountrySelect(event) {
    const countryIndex = event.target.value;
    const country = this.state.countries[countryIndex];
    this.setState({ selectedCountry: country });
  }

  render() {
    console.log("rendering...");
    return (
      <div>
        <CountrySelector
          countries={this.state.countries}
          onSelect={this.handleCountrySelect}
        />
        <CountryDetails country={this.state.selectedCountry} />
      </div>
    );
  }
}

export default CountriesBox;
