import React, { Component } from "react";
import "./Development.scss";
import DevicesScheme from '../components/devices-scheme'

class Development extends Component {
  render() {
    return <div className="development container">
      <div className="heading">
        <h1 className="title">
        Android<br/>Application Development
        </h1>
        <hr className="line"></hr>
        <p className="intro">
          I help you create top-notch native apps for Android smartphones, Android Wear, and Android TV using the Java and Kotlin programming languages.
        </p>
      </div>
      <DevicesScheme></DevicesScheme>
    </div>;
  }
}

export default Development;