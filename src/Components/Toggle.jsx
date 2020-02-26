import React, { Component } from "react";

class Toggle extends Component {
  state = { isShowing: true };
  render() {
    return (
      <div className={this.props.buttonText + "ToggleContainer"}>
        <button
          className={this.props.buttonText + "Toggle"}
          onClick={this.toggleIsShowing}
        >
          {this.state.isShowing ? "Hide" : "Show"} {this.props.buttonText}
        </button>
        {this.state.isShowing ? this.props.children : null}
      </div>
    );
  }

  toggleIsShowing = () => {
    this.setState(currentState => {
      return { isShowing: !currentState.isShowing };
    });
  };
}

export default Toggle;
