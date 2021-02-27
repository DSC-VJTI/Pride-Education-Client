import React from "react";
import img1 from "../Resources/img1.jpeg";
import "./components.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBRow,
  MDBBox,
  MDBCol,
  MDBView,
  MDBIcon
} from "mdbreact";
const Pane = () => {
  return (
    <>
      {/* <MDBIcon icon="chevron-left" size="lg"/> */}
      <MDBBox className="m-3 p-2 title text-white ClassHead">
        <MDBCol>
          <MDBIcon icon="file-contract" className="form-inline">
            Financial Reporting
          </MDBIcon>
          <form className="form-inline mt-2 mx-2">
            <input
              className="form-control mx-2 w-30"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <MDBIcon icon="search"></MDBIcon>
          </form>
        </MDBCol>
      </MDBBox>
      <div className="p-4 ProdPane">
        <MDBRow>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </MDBRow>
      </div>
      {/* <MDBIcon icon="chevron-right" /> */}
    </>
  );
};

const Product = () => {
  return (
    <MDBCol md="4" style={{ maxWidth: "22rem", Height: "fit-content" }} className="my-3">
      <MDBCard narrow cascade>
        <MDBView cascade>
          <MDBCardImage
            hover
            overlay="white-slight"
            className="card-img-top"
            src={img1}
            alt="Card cap"
          />
        </MDBView>

        <MDBCardBody cascade className="text-center">
          <MDBCardTitle className="card-title">
            <strong>Abhishek Khilwani</strong>
          </MDBCardTitle>

          <p className="font-weight-bold blue-text">Photographer</p>
          <MDBCol md="12" className="d-flex justify-content-center">
            <MDBBtn>Go to the Course Page</MDBBtn>
          </MDBCol>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Pane;
