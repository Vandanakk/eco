import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import blogs from "./blogs";  // Example blog data as an array of objects
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
// import "./bloglist.css";

const BlogList = () => {
  return (
    <>
      <Helmet>
        <title>Our Blogs</title>
        <meta name="description" content="Stay updated with the latest news and articles." />
      </Helmet>
      <MDBContainer fluid>
        <h1 className="text-center my-4">Latest Blogs</h1>
        <MDBRow className="justify-content-center mb-0">
          {blogs.map((blog) => {
            const { id, title, image, summary } = blog;
            return (
              <MDBCol md="12" xl="10" key={id}>
                <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol md="12" lg="4">
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <MDBCardImage src={image} fluid className="w-100" />
                        </MDBRipple>
                      </MDBCol>
                      <MDBCol md="8">
                        <h5>{title}</h5>
                        <p className="text-truncate mb-4">{summary}</p>
                        <Link to={`/blogs/${id}`}>
                          <MDBBtn color="primary" size="sm">
                            Read More
                          </MDBBtn>
                        </Link>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default BlogList;
