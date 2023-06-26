import React from "react";

class ChangeState extends React.Component {
  state = {
    goOut: "Yes",
  };

  toggleGoOut = () => {
    this.setState((prevState) => {
      return {
        goOut: prevState.goOut === "Yes" ? "No" : "Yes",
      };
    });
  };

  render() {
    return (
      <div style={{ marginTop: "1rem" }}>
        <h1>Change state</h1>
        <div className="state-value" onClick={this.toggleGoOut}>
          <h4>{this.state.goOut}</h4>
        </div>
      </div>
    );
  }
}

export default ChangeState;
