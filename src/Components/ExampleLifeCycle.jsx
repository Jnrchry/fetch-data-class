import React from "react";

export class ExampleLifeCycle extends React.Component {
  state = {
    name: "Junior",
  };

  render() {
    console.log("render");
    return (
      <div style={{ margin: "1rem" }}>
        <h1>ExampleLifeCycle</h1>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default ExampleLifeCycle;
