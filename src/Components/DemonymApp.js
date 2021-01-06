import React, { Component } from "react";
import CountrySelector from "./CountrySelector";
import Demonym from "./Demonym";
import "../Styles/DemonymApp.css";

export default class DemonymApp extends Component {
  //initialize state using a constructor
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null,
    };
  }

  componentDidMount() {
    fetch("https://country.register.gov.uk/records.json?page-size=5000")
      .then((response) => response.json())
      .then((data) => {
        const countries = Object.keys(data).map((key) => data[key].item[0]);
        console.log(countries);
        this.setState({
          countries,
        });
      });
  }

  render() {
    return (
      <div className="DemonymApp">
        <CountrySelector
          countries={[{ name: "Barbados" }, { name: "Bahrain" }]}
        />
        <Demonym name="Barbadian" country="Barbados" />
      </div>
    );
  }
}
