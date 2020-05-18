import { Router } from "@reach/router";
import "./App.css";
import Header from "./Components/Header";
import Articles from "./Components/Articles/Articles";
import Article from "./Components/Articles/Article";
import Topics from "./Components/Topics/Topics";
import Home from "./Components/Home";

import React, { Component } from "react";
import ErrorPage from "./Components/ErrorPage";

// class App extends Component {
//   state = { user: null };
//   render() {
//     return (
//       <div className="App">
//         <Header login={this.login} user={this.state.user} />
//         <main>
//           <Router>
//             <Articles path="/articles" />
//             <Topics path="/topics" />
//             <Topics path="topics/:topic" user={this.state.user} />
//             <Home path="/" />
//             <Home path="/home" />
//             <Article path="articles/:article_id" user={this.state.user} />
//             <ErrorPage default err={{ msg: "Not Found", status: "404" }} />
//           </Router>
//         </main>
//       </div>
//     );
//   }

//   login = () => {
//     this.setState({ user: "cooljmessy" });
//   };
// }

// export default App;

const App = () => {
  const [user, login] = React.useState(null);
  return (
    <div className="App">
      <Header login={login} user={user} />
      <main>
        <Router>
          <Articles path="/articles" />
          <Topics path="/topics" />
          <Topics path="topics/:topic" user={user} />
          <Home path="/" />
          <Home path="/home" />
          <Article path="articles/:article_id" user={user} />
          <ErrorPage default err={{ msg: "Not Found", status: "404" }} />
        </Router>
      </main>
    </div>
  );
};

export default App;
