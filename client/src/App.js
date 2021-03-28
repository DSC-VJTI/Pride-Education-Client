import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ClassesPane from "./components/Resource Page/ClassesPane";
import CoursePage from "./components/Product Page/CoursePage";

import Landing from "./components/LandingPage/Landing";
import SupportPage from "./components/Support Page/SupportPage";
import Registration from "./components/LoginRegister/Registration";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Cart from "./components/Cart/Cart";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AddProduct from "./components/DashboardLayout/ProductListView/AddProduct";
import DashboardLayout from "./components/DashboardLayout";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/classes" component={ClassesPane} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/product" component={CoursePage} />
        <Route path="/support" component={SupportPage} />
        <Route path="/register" component={LoginRegister} />

        {/* Protected routes go here */}
        <Route path="/product/add" component={AddProduct} />
        <Route path="/product/edit/:productId" component={AddProduct} />
        <Route path="/admin" component={DashboardLayout} />
        <Route path="/login" component={LoginRegister} />
        <Route path="/" exact component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
