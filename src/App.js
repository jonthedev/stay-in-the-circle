import React, { Component } from "react";
import "./style.css";
import Circle from "./components/Circle";
import ButtonStart from "./components/ButtonStart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameStatus: false,
      count: 0,
    };
  }

  //START / STOP GAME
  setGameStatus = () => {
    this.setState(prevState => ({
      gameStatus: !prevState.gameStatus,
      count: prevState.count > 0 ? 0 : prevState.count,
    }));
  };

  //INCREASE COUNTER
  addCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  //increase count here
  componentDidUpdate() {
    // if (this.gameStatus) {
    //   this.setState(prevState => ({
    //     count: prevState.count + 1,
    //   }));
    // }
  }

  render() {
    return (
      <div className="container">
        <h1>Stay in the circle</h1>
        <p>
          * Welcome, the rules are simple, you must move your mouse pointer
          within the orange circle and stay there until the counter reaches 100.
        </p>
        <Circle addCount={this.addCount} gameStatus={this.state.gameStatus} />
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
