import React, { Component } from "react";
import "./style.css";
import Circle from "./components/Circle";
import Controller from "./components/Controller";
import ButtonStart from "./components/ButtonStart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameStatus: false,
      count: 0,
      animateCircle: {
        animate: false,
        class: "marker",
      },
    };
  }

  //START / STOP GAME
  setGameStatus = () => {
    this.setState(prevState => ({
      gameStatus: !prevState.gameStatus,
      animateCircle: {
        class: prevState.gameStatus ? "marker" : "marker marker-rotate",
      },
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Stay in the circle</h1>
        <p>
          * Welcome, the rules are simple, you must move your mouse pointer
          within the yellow circle and stay there until the counter reaches 100.
        </p>
        <Circle animate={this.state.animateCircle} />
        <div className="control">
          <ButtonStart
            setGameStatus={this.setGameStatus}
            gameStatus={this.state.gameStatus}
          />
          <span className="count">{this.state.count}</span>
        </div>
      </div>
    );
  }
}

export default App;
