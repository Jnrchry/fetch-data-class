import React from "react";

class OldStateMethod extends React.Component {
  constructor() {
    super();

    this.state = {
      goOut: "Yes",
    };

    this.toggleGoOut = this.toggleGoOut.bind(this);
  }

  toggleGoOut() {
    this.setState((prevState) => {
      return {
        goOut: prevState.goOut === "Yes" ? "No" : "Yes",
      };
    });
  }

  render() {
    return (
      <div style={{ marginTop: "1rem" }}>
        <h1>OldStateMethod</h1>
        <button onClick={this.toggleGoOut}> {this.state.goOut}</button>
      </div>
    );
  }
}

export default OldStateMethod;
