import React from "react";
import { PropTypes } from "prop-types";

class ClassComp extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h3>{this.props.name} component</h3>
      </div>
    );
  }
}

export default ClassComp;
