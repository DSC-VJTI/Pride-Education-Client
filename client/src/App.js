import React, { lazy, Suspense, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/context";
import ProtectedRoute from "./ProtectedRoute";
import { Box } from "@material-ui/core";
import { SnackbarContext, SnackbarProvider } from "./context/snackbarContext";
import SnackBar from "./components/UI Elements/Snackbar";
import Loading from "./components/UI Elements/Loading";

const LazyNotFoundView = lazy(() => import("./components/NotFoundView"));
const LazyClassesPane = lazy(() =>
  import("./components/Resource Page/ClassesPane")
);
const LazyCart = lazy(() => import("./components/Cart/Cart"));
const LazyCoursePage = lazy(() =>
  import("./components/Product Page/CoursePage")
);
const LazySupportPage = lazy(() =>
  import("./components/Support Page/SupportPage")
);
const LazyRegistration = lazy(() =>
  import("./components/LoginRegister/Registration")
);
const LazyLogin = lazy(() => import("./components/LoginRegister/Login"));
const LazyMyOrders = lazy(() => import("./components/MyOrders/MyOrders"));
const LazyProductDetails = lazy(() =>
  import("./components/ProductDetails/ProductDetails")
);
const LazyTestProductDetails = lazy(() =>
  import("./components/TestDetails/TestProductDetails")
);
const LazyBookProductDetails = lazy(() =>
  import("./components/BookDetails/BookProductDetails")
);
const LazyAddProduct = lazy(() =>
  import("./components/DashboardLayout/ProductListView/AddProduct")
);
const LazyDashboardLayout = lazy(() => import("./components/DashboardLayout"));
const LazyPdfViewer = lazy(() => import("./components/Books/PdfViewer"));
const LazyResources = lazy(() => import("./components/Books/Resources"));
const LazyComingSoon = lazy(() => import("./components/ComingSoon"));
const LazyLanding = lazy(() => import("./components/LandingPage/Landing"));

const SnackBarComponent = () => {
  const [
    open,
    setOpen,
    handleClose,
    severity,
    setSeverity,
    message,
    setMessage
  ] = useContext(SnackbarContext);
  return (
    <SnackBar
      open={open}
      autoHideDuration={6000}
      handleClose={handleClose}
      severity={severity}
      message={message}
    />
  );
};

const App = () => {
  const [alert, setAlert] = useState(-1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box
      display="flex"
      flexDirection="column"
      className="App"
      style={{
        position: "relative",
        minHeight: "100vh"
      }}
    >
      <SnackbarProvider>
        <AuthProvider>
          <SnackBarComponent />
          <Router>
            <Navbar />
            <Box flexGrow={1}>
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route path="/classes" component={LazyClassesPane} />
                  <ProtectedRoute
                    path="/cart"
                    component={() => (
                      <LazyCart setAlert={setAlert} alert={alert} />
                    )}
                  />
                  <Route exact path="/product" component={LazyCoursePage} />
                  <Route path="/register" component={LazyRegistration} />
                  <Route path="/login" component={LazyLogin} />
                  <Route
                    path="/orders"
                    component={() => (
                      <LazyMyOrders setAlert={setAlert} alert={alert} />
                    )}
                  />
                  ;
                  <Route
                    path="/course/details/:name"
                    component={LazyProductDetails}
                  />
                  <Route
                    path="/test/details/:_id"
                    component={LazyTestProductDetails}
                  />
                  <Route
                    path="/book/details/:_id"
                    component={LazyBookProductDetails}
                  />
                  <Route path="/product/add" component={LazyAddProduct} />
                  <Route
                    path="/product/edit/:productId"
                    component={LazyAddProduct}
                  />
                  <Route path="/admin" component={LazyDashboardLayout} />
                  <Route
                    path="/resources/:fileName"
                    component={LazyPdfViewer}
                  />
                  {/* <ProtectedRoute path="/resources" component={LazyResources} /> */}
                  <Route path="/resources" component={LazyResources} />
                  <Route path="/coming" component={LazyComingSoon} />
                  <Route path="/" exact component={LazyLanding} />
                  <Route component={LazyNotFoundView} />
                </Switch>
              </Suspense>
            </Box>
            <Box>
              <Footer />
            </Box>
          </Router>
        </AuthProvider>
      </SnackbarProvider>
    </Box>
  );
};

export default App;
