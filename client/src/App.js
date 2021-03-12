import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/LandingPage/Landing";
import SupportPage from "./components/Support Page/SupportPage";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    Aos.init({duration:2000});
   },[]);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/supp" component={SupportPage} />
      </Switch>
    </Router>
  );
}

export default App;
