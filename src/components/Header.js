import React, { useState } from "react";

class Header extends React.Component {
  state = {
    title: "Stay In The Circle",
    welcomeMessage:
      "* Welcome, the rules are simple, MR-T wants you to keep your mouse pointer within the orange circle. You win when the counter reaches 50. *",
  };
  render() {
    return (
      <header>
        <h1>{this.state.title}</h1>
        <p>{this.state.welcomeMessage}</p>
      </header>
    );
  }
}

export default Header;
