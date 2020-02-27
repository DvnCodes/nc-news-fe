import React, { Component } from "react";
import * as api from "../api";

class Votes extends Component {
  state = { votes: null };

  componentDidMount() {
    this.setState({ votes: this.props.content.votes });
  }

  render() {
    return (
      <div className="voteDiv">
        <div className="upvoteButton">
          <button
            disabled={this.state.votes > this.props.content.votes}
            onClick={() => {
              this.handleVote(1);
            }}
          >
            ⬆
          </button>
        </div>
        <p>{this.state.votes}</p>
        <div className="downvoteButton">
          <button
            disabled={this.state.votes < this.props.content.votes}
            onClick={() => {
              this.handleVote(-1);
            }}
          >
            ⬇
          </button>
        </div>
      </div>
    );
  }
  handleVote = inc => {
    console.log("id: ", this.props.content[`${this.props.type}_id`]);

    this.incrementVotes(this.props.content[`${this.props.type}_id`], inc);
    this.setState(currentState => {
      return { votes: currentState.votes + inc };
    });
  };
  incrementVotes = (id, inc) => {
    api.patchContentVotes(id, inc, this.props.type);
  };
}

export default Votes;
