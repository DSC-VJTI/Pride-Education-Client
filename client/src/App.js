import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ClassesPane from "./components/Resource Page/ClassesPane";
import CoursePage from "./components/Product Page/CoursePage";
import Landing from "./components/LandingPage/Landing";
import SupportPage from "./components/Support Page/SupportPage";
import Registration from "./components/LoginRegister/Registration";
import Login from "./components/LoginRegister/Login";
import Cart from "./components/Cart/Cart";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AddProduct from "./components/DashboardLayout/ProductListView/AddProduct";
import DashboardLayout from "./components/DashboardLayout";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import MyOrders from "./components/MyOrders/MyOrders";
import { AuthProvider } from "./context/context";
import PdfViewer from "./components/Books/PdfViewer";
import Resources from "./components/Books/Resources";
import ProtectedRoute from "./ProtectedRoute";
import ComingSoon from "./components/ComingSoon";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/classes" component={ClassesPane} />
          <Route path="/cart/:_id" component={Cart} />
          <Route exact path="/product" component={CoursePage} />
          <Route path="/support" component={SupportPage} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/orders" component={MyOrders} />

          {/* Protected routes go here */}
          <Route path="/product/add" component={AddProduct} />
          <Route path="/product/edit/:productId" component={AddProduct} />
          <Route path="/admin" component={DashboardLayout} />
          <Route path="/resources/:fileName" component={PdfViewer} />
          <ProtectedRoute path="/resources" component={Resources} />
          <Route path="/coming" component={ComingSoon} />
          <Route path="/" exact component={Landing} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
