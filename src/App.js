import React, { Component } from "react";
import "./style.css";
import Circle from "./components/Circle";
import ButtonStart from "./components/ButtonStart";
import Message from "./components/Message";
import Header from "./components/Header";

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
        <Header />
        <Circle addCount={this.addCount} gameStatus={this.state.gameStatus} />
        <div className="control">
          <ButtonStart
            setGameStatus={this.setGameStatus}
            gameStatus={this.state.gameStatus}
          />
          <span className="count">{this.state.count}</span>
        </div>
        <div>
          {this.state.count <= 49 ? (
            <p>"I pity the fool who doesn't stay in the circle!"</p>
          ) : (
            <Message />
          )}
        </div>
      </div>
    );
  }
}

export default App;
