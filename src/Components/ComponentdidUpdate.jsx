import React from "react";

class ComponentdidUpdate extends React.Component {
  state = {
    name: "Junior",
  };

  toggleName = () => {
    this.setState({ name: "Wahab" });
  };

  componentDidUpdate() {
    this.toggleName;
  }

  render() {
    // console.log("render");
    return (
      <div style={{ marginTop: "1rem" }}>
        <h1>ComponentdidUpdate</h1>
        <p>{this.state.name}</p>
        <button onClick={this.toggleName}>Update Name</button>
      </div>
    );
  }
}

export default ComponentdidUpdate;
