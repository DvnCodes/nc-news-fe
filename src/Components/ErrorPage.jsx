import React, { Component } from "react";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <h1>
          {" "}
          {this.props.err.status} {this.props.err.msg}
        </h1>
      </div>
    );
  }
}

export default ErrorPage;
