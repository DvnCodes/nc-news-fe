// import React, { Component } from "react";

// class Vote extends Component {
//   state = { article: {} };

//   componentDidUpdate(prevProps, prevState) {
//     // if (prevProps.article !== this.state.article) {
//     //   this.setState({ article: this.props.article });
//     // }
//   }

//   render() {
//     return (
//       <div>
//         <button
//           className="votemojis"
//           onClick={this.updateVotes(this.state.article)}
//         >
//           <span role="img" aria-label="upvote" id="upvote">
//             ⬆️
//           </span>
//         </button>
//         <button className="votemojis">
//           {" "}
//           <span role="img" aria-label="downvote">
//             ⬇️
//           </span>
//         </button>
//         {"  "}
//         <button className="votemojis">
//           <span role="img" aria-label="votes">
//             🐸 {this.state.article.votes}
//           </span>
//         </button>
//       </div>
//     );
//   }

//   updateVotes = article => {
//     this.setState({ article });
//     console.log("test");
//   };
// }

// export default Vote;
