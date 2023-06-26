import React from "react";

class State extends React.Component {
  //   constructor() {
  //     super();
  //   }

  state = {
    goOut: "Yes",
  };

  render() {
    return (
      <div>
        <h4>{this.state.goOut}</h4>
      </div>
    );
  }
}

export default State;
