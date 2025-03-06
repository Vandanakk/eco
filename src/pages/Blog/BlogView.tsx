import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCardBody,
  MDBSpinner,
} from "mdb-react-ui-kit";
import Helmet from "react-helmet";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./blog.css";
import Footer from "../../component/Footer/footer";

const API_KEY = ""; // Replace with your API Key
const DRIVE_API_URL = "https://www.googleapis.com/drive/v3/files";

// Helper to format the date
const formatDate = (dateString: string) => {
  const formattedDate = new Date(dateString);
  return formattedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Helper to format the file name as the blog title
const formatTitle = (fileName: string) => {
  return fileName.replace(".html", "").replace(/_/g, " ");
};

const BlogView = () => {
  const { id } = useParams<{ id: string }>();
  const [blogContent, setBlogContent] = useState<string>("");
  const [title, setTitle] = useState<string>("Loading...");
  const [date, setDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(false);

        // Fetch file metadata (name and created date)
        const metadataResponse = await fetch(
          `${DRIVE_API_URL}/${id}?key=${API_KEY}&fields=name,createdTime`
        );

        if (!metadataResponse.ok) {
          throw new Error(`HTTP error! Status: ${metadataResponse.status}`);
        }

        const metadata = await metadataResponse.json();
        setTitle(formatTitle(metadata.name));
        setDate(formatDate(metadata.createdTime));

        // Fetch file content
        const contentResponse = await fetch(
          `https://docs.google.com/document/d/${id}/export?format=txt`
        );

        if (!contentResponse.ok) {
          throw new Error(`HTTP error! Status: ${contentResponse.status}`);
        }

        const htmlContent = await contentResponse.text();
        setBlogContent(htmlContent);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Read more about ${title}.`} />
      </Helmet>
      <MDBContainer className=" bg-white container">
        <article>
          <Link to="/blogs" className="my-5 back-link">
            &larr; Back to Blogs
          </Link>

          {/* Blog Header */}
          <header className="blog-header">
            {loading ? (
              <Skeleton height={40} width="60%" />
            ) : (
              <h1 className="blog-title">{title}</h1>
            )}
            {loading ? (
              <Skeleton height={20} width="30%" />
            ) : (
              <p className="blog-date">{date}</p>
            )}
          </header>

          {/* Loading / Error Handling / Blog Content */}
          {loading ? (
            <div className="blog-skeleton">
              <Skeleton count={8} height={20} width="100%" />
              <Skeleton height={200} width="100%" className="my-2" />
              <Skeleton count={5} height={20} width="100%" />
            </div>
          ) : error ? (
            <div className="text-center my-5">
              <h2 className="text-danger">Oops! Blog Not Found.</h2>
              <p>It looks like this blog doesn't exist or is unavailable.</p>
            </div>
          ) : (
            <MDBCardBody className="p-0 blog-content">
              <div
                className="blog-html-content"
                dangerouslySetInnerHTML={{ __html: blogContent }}
              />
            </MDBCardBody>
          )}
        </article>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default BlogView;
