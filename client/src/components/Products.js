import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavLink } from "mdbreact";

const Products = () => {
  return (
    <BrowserRouter>
      <MDBNav>
        <MDBNavLink to="#!">Classes</MDBNavLink>
        <MDBNavLink to="#!">Books</MDBNavLink>
        <MDBNavLink to="#!">Test Series</MDBNavLink>
        <MDBNavLink to="#!">Free Resource</MDBNavLink>
      </MDBNav>
    </BrowserRouter>
  );
};

export default Products;
