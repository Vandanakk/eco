import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MDBContainer, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import blogs from "./blogs";
import Helmet from "react-helmet";
import "./blog.css";
import Footer from "../../component/Footer/footer";

// Helper to format the date
const formatDate = (date: string) => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogView = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState(() => blogs.find((b) => b.id === Number(id)) || null);

  if (!blog) {
    return (
      <div className="not-found-container">
        <h2 className="not-found-title">Oops! We couldn't find that blog.</h2>
        <p className="not-found-message">Maybe it's taking a nap, or it never existed.</p>
        <Link to="/blogs" className="back-to-blogs">Back to Blogs</Link>
      </div>
    );
  }

  const { title, image, content, date } = blog;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Read more about ${title}.`} />
      </Helmet>
      <MDBContainer className="my-5 p-5 bg-white">
        <article>
          <Link to="/blogs" className="back-link">
            &larr; Back to Blogs
          </Link>
          <header className="blog-header">
            
            {title && <h1 className="blog-title">{title}</h1>}
            <p className="blog-date">{formatDate(date)}</p> {/* Display the date here */}
            {image && (
              <MDBCardImage
                src={image}
                alt={title}
                fluid
                className="blog-image"
              />
            )}
          </header>
          <MDBCardBody className="p-0 blog-content">
            <div className="blog-html-content" dangerouslySetInnerHTML={{ __html: content }} />
          </MDBCardBody>
        </article>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default BlogView;
