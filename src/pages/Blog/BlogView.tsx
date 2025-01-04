import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import blogs from "./blogs";  // Import your blog data
import Helmet from "react-helmet";
import './blog.css'

interface Blog {
  id: number;
  title: string;
  image: string;
  summary: string;
  content: string;
}

type BlogParams = {
  id: string;
};

const BlogView = () => {
  const { id } = useParams<BlogParams>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const blogId = Number(id);  // Convert string `id` to a number
    const selectedBlog = blogs.find((b) => b.id === blogId);  // Compare the number ids
    setBlog(selectedBlog || null);
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={`Read more about ${blog.title}.`} />
      </Helmet>
      <MDBContainer className="my-5">
        <MDBCard className="shadow-sm rounded">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={blog.image} fluid alt={blog.title} className="blog-image" />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.6)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <h2 className="text-center text-dark">{blog.title}</h2>
            <div
              className="content-text"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </MDBCardBody>
          <div className="d-flex justify-content-center">
            <MDBBtn color="primary" href="/blogs">
              Back to Blogs
            </MDBBtn>
          </div>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default BlogView;
