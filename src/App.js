import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>Stay in the circle</h1>
        <p>
          * Welcome, the rules are simple, you must move your mouse pointer
          within the yellow circle and stay there until the counter reaches 100.
        </p>
        <svg viewBox="0,0 10,10" width="400px" height="400px">
          <path
            className="track"
            fill="none"
            strokeWidth="0.25"
            d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
          />

          <circle className="marker" r="1" fill="orange"></circle>
        </svg>
        <span className="counter">0</span>
      </div>
    );
  }
}

export default App;
