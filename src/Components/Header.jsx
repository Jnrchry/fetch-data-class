import React from "react";
import { PropTypes } from "prop-types";

class Header extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div>
        <h3>Header Page</h3>
        <p>Welcome; {this.props.username}</p>
      </div>
    );
  }
}

export default Header;
