import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import blogs from "./blogs";
import "./blog.css";

const stripHTML = (htmlString: string) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.textContent || div.innerText || "";
};

const extractTitleAndImage = (content: string) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;
  const title = tempDiv.querySelector("h1")?.innerText || "Untitled Blog";
  const imgElement = tempDiv.querySelector("img");
  const image = imgElement?.getAttribute("src") || "https://via.placeholder.com/300";
  return { title, image };
};

const BlogList = () => {
  return (
    <MDBContainer className="my-2 blog-list">
      <header className="text-center mb-5">
        <h1 className="page-title">Explore Our Latest Blogs</h1>
        <p className="page-subtitle">
          Stay inspired and informed with the latest insights, tips, and stories.
        </p>
      </header>
      <MDBRow>
        {blogs.map((blog) => {
          const { title, image } = blog.title && blog.image
            ? { title: blog.title, image: blog.image }
            : extractTitleAndImage(blog.content);
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
  );
};

export default BlogList;
