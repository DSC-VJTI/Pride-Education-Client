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
const Pane = ({field}) => {
  return (
    <>
    {/* This is the Main Search BOx for the courses with Names */}
      <MDBBox className="m-3 p-2 text-white ClassHead">
        <MDBCol>
          <form className="form-inline mx-2">
            <MDBIcon icon="file-contract">
              {field}
            </MDBIcon>
            <input
              className="form-control mx-2"
              type="text"
              placeholder="Search"
            />
            <MDBIcon icon="search"></MDBIcon>
          </form>
        </MDBCol>
      </MDBBox>
        {/* THis is the Products that on click takes to next page */}
        <MDBRow className="m-auto p-4 ProdPane center">
          <Product></Product>
        </MDBRow>
    </>
  );
};

const Product = () => {
  return (
    <MDBCol style={{ maxWidth: "max-content"}} className="my-3">
      
      <MDBCard narrow cascade>
        <MDBView cascade>
          <MDBCardImage
            hover
            overlay="white-slight"
            className="card-img-top"
            src={img1}
            // Width of the image should be <= 300px
            style={{ width:"300px"}}
          />
        </MDBView>

        {/* The main Body start */}
        <MDBCardBody cascade className="text-center">
          {/* This will be course title */}
          <MDBCardTitle className="card-title">
            <strong>Abhishek Khilwani</strong>
          </MDBCardTitle>

          {/* This will be course instructor */}
          <p className="font-weight-bold blue-text">Photographer</p>
          
          {/* Button to go to the Course Page */}
            <MDBBtn>Go to the Course Page</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Pane;
