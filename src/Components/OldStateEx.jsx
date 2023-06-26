import React from "react";

class OldStateEx extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  subtract() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  render() {
    return (
      <div style={{ marginTop: "1rem" }}>
        <h1>OldStateEx</h1>
        <h2>{this.state.count}</h2>
        <button className="btn" onClick={this.subtract}>
          Subtract
        </button>
        <button className="btn" onClick={this.add}>
          Add
        </button>
      </div>
    );
  }
}

export default OldStateEx;
