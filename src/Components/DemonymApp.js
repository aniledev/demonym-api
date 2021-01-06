import React, { Component } from "react";
import CountrySelector from "./CountrySelector";
import Demonym from "./Demonym";
import "../Styles/DemonymApp.css";

export default class DemonymApp extends Component {
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
