import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import { App } from "./views";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Route } from "react-router";
import createHistory from "history/createBrowserHistory";

class Root extends React.Component {
  render() {
    const history = createHistory();
    return (
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
