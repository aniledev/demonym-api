import React, { Component } from "react";
import "../Styles/App.css";
import CountrySelector from "./CountrySelector";
import Demonym from "./Demonym";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CountrySelector />
        <Demonym />
      </div>
    );
  }
}
