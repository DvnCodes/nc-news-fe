import React, { Component } from "react";
import * as api from "../api";

class Votes extends Component {
  state = { votes: null };

  componentDidMount() {
    this.setState({ votes: this.props.content.votes });
  }

  render() {
    return (
      <div>
        <p>Votes: {this.state.votes}</p>

        <button
          onClick={() => {
            this.handleVote(1);
          }}
        >
          upvote
        </button>
        <button
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          downvote
        </button>
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
