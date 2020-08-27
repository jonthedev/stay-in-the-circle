import React, { Component } from "react";
import "./style.css";
import Circle from "./components/Circle";
import ButtonStart from "./components/ButtonStart";
import Message from "./components/Message";
import MrT from "./components/MrT";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameStatus: false,
      count: 0,
      title: "Stay In The Circle",
      welcomeMessage:
        "* Welcome, the rules are simple, MR-T wants you to keep your mouse pointer within the orange circle. You win when the counter reaches 50. *",
    };
  }

  //START / STOP GAME
  setGameStatus = () => {
    this.setState(prevState => ({
      gameStatus: !prevState.gameStatus,
    }));

    if (this.state.gameStatus && this.state.count > 0) {
      this.resetCounter();
    }
  };

  //INCREASE COUNTER
  addCount = () => {
    if (this.state.count <= 49) {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }
  };

  //RESET COUNTER
  resetCounter = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
        <p>{this.state.welcomeMessage}</p>
        <div className="container">
          <Circle addCount={this.addCount} gameStatus={this.state.gameStatus} />
          <MrT />
        </div>
        <div className="control">
          <ButtonStart
            setGameStatus={this.setGameStatus}
            gameStatus={this.state.gameStatus}
          />
          <span className="count">{this.state.count}</span>
        </div>
        <div>
          {this.state.count <= 49 ? (
            <h1>"I pity the fool who doesn't stay in the circle!"</h1>
          ) : (
            <Message />
          )}
        </div>
      </div>
    );
  }
}

export default App;
