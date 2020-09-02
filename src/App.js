import React, { Component } from "react";
import "./style.css";
import Circle from "./components/Circle";
import ButtonStart from "./components/ButtonStart";
import Message from "./components/Message";
import Header from "./components/Header";
import AudioIcon from "./components/AudioIcon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameStatus: false,
      count: 0,
      winLoose: null,
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
        <AudioIcon count={this.state.count} />
        <Header />
        <Circle addCount={this.addCount} gameStatus={this.state.gameStatus} />
        <div className="control">
          <ButtonStart
            setGameStatus={this.setGameStatus}
            gameStatus={this.state.gameStatus}
          />
          <span className="count">{this.state.count}</span>
        </div>
        <Message count={this.state.count} />
      </div>
    );
  }
}

export default App;
