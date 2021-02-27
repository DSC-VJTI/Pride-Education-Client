import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "./components.css"
const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4 pb-2">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <h5 className="title">LOGO</h5>
          </MDBCol>
          <MDBCol>About</MDBCol>
          <MDBCol>Contact</MDBCol>
          <MDBCol>Privacy Policy</MDBCol>
          <MDBCol className="Icons">
            <MDBIcon fab icon="youtube" size="lg" />
            <MDBIcon fab icon="linkedin" size="lg" />
            <MDBIcon fab icon="twitter" size="lg" />
            <MDBIcon fab icon="facebook-square" size="lg" />
            <MDBIcon fab icon="instagram" size="lg" />
            <MDBIcon fab icon="telegram" size="lg" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
