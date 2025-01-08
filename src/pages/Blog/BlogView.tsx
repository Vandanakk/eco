import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MDBContainer, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import blogs from "./blogs";
import Helmet from "react-helmet";
import "./blog.css";

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

  const { title, image, content } = blog;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Read more about ${title}.`} />
      </Helmet>
      <MDBContainer className="my-5">
        <article>
          <Link to="/blogs" className="back-link">
            &larr; Back to Blogs
          </Link>
          <header className="blog-header">
            {image && (
              <MDBCardImage
                src={image}
                alt={title}
                fluid
                className="blog-image"
              />
            )}
            {title && <h1 className="blog-title">{title}</h1>}
          </header>
          <MDBCardBody className="p-0 blog-content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </MDBCardBody>
        </article>
      </MDBContainer>
    </>
  );
};

export default BlogView;
