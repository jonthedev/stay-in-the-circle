import React from "react";

class Circle extends React.Component {
  constructor() {
    super();
    this.state = {
      circle: {
        inside: false,
      },
    };
  }

  circleStatus = () => {
    //set status if user is inside the circle
    this.setState(prevState => ({
      circle: {
        inside: !prevState.circle.inside,
      },
    }));
    const { inside } = this.state.circle;

    //add to counter if user is in the circle
    if (!inside) {
      this.props.addCount();
    }
  };

  render() {
    const gameStatus = this.props.gameStatus;
    return (
      <svg viewBox="0,0 10,10" width="400px" height="400px">
        <path
          className="track"
          fill="none"
          strokeWidth="0.25"
          d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
        />
        <circle
          className={gameStatus ? "marker marker-rotate" : "marker"}
          onMouseOver={() => this.circleStatus()}
          onMouseLeave={() => this.circleStatus()}
          r="1"
          fill="orange"
        ></circle>
      </svg>
    );
  }
}

export default Circle;
