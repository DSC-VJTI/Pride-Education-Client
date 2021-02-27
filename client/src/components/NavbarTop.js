import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
// This gives the products ... later can be passed as props
var Products = ["Classes", "Books", "Test Series", "Free Resource"];
class NavbarPage extends Component {
  state = {
    isOpen: false,
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      // Fixes the routes
      <Router>
        {/* The main Navbar component */}
        <MDBNavbar color="grey" dark expand="md">
          {/* Branding: May contain logo */}
          <MDBNavbarBrand>
            <strong className="white-text">LOGO</strong>
          </MDBNavbarBrand>

          {/* This adds the hamburger icon */}
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right className="my-0">
              {/* Purpose of Wizard not known TODO: Know the desc of the same */}
              {/* It may be the main link to the Landing Page */}
              <MDBNavItem active>
                <MDBNavLink to="#!">Wizard</MDBNavLink>
              </MDBNavItem>

              {/* Main link for the market-place */}
              <MDBNavItem>
                <MDBDropdown>
                  {/* This has additional Nav to make it inseperable from the original Navbar */}
                  <MDBDropdownToggle nav>
                    <MDBIcon icon="shopping-cart"> Buy</MDBIcon>
                  </MDBDropdownToggle>
                  {/* Links to the Classes and all: TODO: Styles are to be added as mentioned */}
                  <MDBDropdownMenu>
                    {Products.map((item, index) => (
                      <MDBDropdownItem>
                        <a href="#!">{item}</a>
                      </MDBDropdownItem>
                    ))}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              {/* Main link to the contact page: TODO add the Page link */}
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <MDBIcon icon="phone-alt">Contact</MDBIcon>
                </MDBNavLink>
              </MDBNavItem>

              {/* Main Link to the Register Page: TODO  add the Page Link */}
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <MDBIcon icon="address-book">Register</MDBIcon>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            {/* End of Nav */}
          </MDBCollapse>
          {/* End of hamburger limit */}
        </MDBNavbar>
        {/* End of Navbar */}
      </Router>
    );
  }
}

export default NavbarPage;
