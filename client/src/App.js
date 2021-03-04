import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
