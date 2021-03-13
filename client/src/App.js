import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import ClassesPane from "./components/Resource Page/ClassesPane";
import CoursePage from "./components/Product Page/CoursePage";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route path="/classes" component={ClassesPane} />
        <Route path="/product" component={CoursePage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
