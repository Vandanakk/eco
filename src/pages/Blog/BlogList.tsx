import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import blogs from "./blogs";
import "./blog.css";
import Footer from "../../component/Footer/footer";

// Helper to strip HTML content for preview
const stripHTML = (htmlString: string) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.textContent || div.innerText || "";
};

// Helper to format the date (You can use any date library like moment.js or date-fns)
const formatDate = (date: string) => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogList = () => {
  return (
    <>
      <MDBContainer className="my-2 blog-list">
        <header className="text-center mb-5">
          <h1 className="page-title">Explore Our Latest Blogs</h1>
          <p className="page-subtitle">
            Stay inspired and informed with the latest insights, tips, and stories.
          </p>
        </header>
        <MDBRow>
          {blogs.map((blog) => {
            const { title, image, date } = blog.title && blog.image
              ? { title: blog.title, image: blog.image, date: blog.date }
              : { title: "Untitled", image: "https://via.placeholder.com/300", date: blog.date };
            
            return (
              <MDBCol md="6" lg="4" className="mb-4" key={blog.id}>
                <Link to={`/blogs/${blog.id}`} className="blog-card-link">
                  <MDBCard className="h-100 blog-card">
                    <div className="image-container">
                      <MDBCardImage
                        src={image}
                        alt={title}
                        position="top"
                        className="blog-thumbnail"
                      />
                    </div>
                    <MDBCardBody className="d-flex flex-column p-3">
                      <h5 className="blog-card-title">{title}</h5>
                      <p className="blog-date">{formatDate(date)}</p> {/* Display the date here */}
                      <p className="blog-content-preview">
                        {stripHTML(blog.content).substring(0, 120)}...
                      </p>
                      <div className="mt-auto">
                        <button className="read-more-btn">Read More →</button>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </Link>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default BlogList;
