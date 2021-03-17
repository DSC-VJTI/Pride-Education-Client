import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/LandingPage/Landing";
import SupportPage from "./components/Support Page/SupportPage";
import Login from "./components/LoginRegister/Login";
import Registration from "./components/LoginRegister/Registration";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/support" component={SupportPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={LoginRegister} />
        <Route path="/admin" component={DashboardLayout} />
        <Route path="/" exact component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
