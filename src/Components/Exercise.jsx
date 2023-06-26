import React from "react";

export class Exercise extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  subtract = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  render() {
    return (
      <div style={{ margin: "1rem" }}>
        <h1>Exercise</h1>
        <h3>{this.state.count}</h3>
        <div>
          <button className="btn" onClick={this.subtract}>
            Add
          </button>

          <button className="btn" onClick={this.add}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Exercise;
