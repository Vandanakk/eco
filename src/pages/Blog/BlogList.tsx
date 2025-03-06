import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../../component/Footer/footer";
import "./blog.css";

const API_KEY = ""; // Replace with your API Key
const FOLDER_ID = ""; // Replace with your Folder ID

interface Blog {
  id: string;
  title: string;
  date: string;
  content: string;
  thumbnail: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search state

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType,createdTime,webViewLink)`
      );
      const data = await response.json();
      if (data.error) {
        console.error("Error:", data.error);
        return;
      }

      const fetchedBlogs = await Promise.all(
        data.files.map(async (file: any) => {
          const fileUrl = `https://docs.google.com/document/d/${file.id}/export?format=txt`;
          const fileResponse = await fetch(fileUrl);
          const htmlContent = await fileResponse.text();

          return {
            id: file.id,
            title: formatFileName(file.name, 40), // Truncated title
            date: formatDate(file.createdTime),
            content: stripHTML(htmlContent).substring(0, 150) + "...",
            thumbnail: extractThumbnail(htmlContent),
          };
        })
      );

      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const stripHTML = (htmlString: string): string => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.textContent || div.innerText || "";
  };

  const extractThumbnail = (htmlString: string): string => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    const img = div.querySelector("img");
    return img ? img.src : "https://placehold.co/300x300?text=something+went+wrong";
  };

  const formatFileName = (fileName: string, maxLength: number = 40): string => {
    let formattedName = fileName.replace(/\..+$/, "").replace(/[-_]/g, " ").trim();
    return formattedName.length > maxLength ? formattedName.substring(0, maxLength) + "..." : formattedName;
  };

  const formatDate = (dateString: string): string => {
    const formattedDate = new Date(dateString);
    return formattedDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // **Filter Blogs Based on Search Query**
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <MDBContainer className="my-2 blog-list">
        <header className="text-center mb-4">
          <h1 className="page-title">Explore Our Latest Blogs</h1>
          <p className="page-subtitle">Stay inspired and informed with the latest insights, tips, and stories.</p>
          
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search blogs..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </header>

        <MDBRow>
          {loading
            ? Array.from({ length: 6 }).map((_, index) => ( // Show 6 Skeleton Cards
                <MDBCol md="6" lg="4" className="mb-4" key={index}>
                  <MDBCard className="h-100 blog-card">
                    <div className="image-container-skeleton">
                      <Skeleton height={200} width="100%" />  
                    </div>
                    <MDBCardBody className="d-flex flex-column p-3">
                      <Skeleton height={25} width="80%" className="mb-2" />
                      <Skeleton height={15} width="60%" className="mb-2" />
                      <Skeleton count={3} height={15} width="100%" className="mb-2" />
                      <Skeleton height={40} width="50%" className="mt-auto" />
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))
            : filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <MDBCol md="6" lg="4" className="mb-4" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} className="blog-card-link">
                      <MDBCard className="h-100 blog-card">
                        <div className="image-container">
                          <MDBCardImage src={blog.thumbnail} alt={blog.title} position="top" className="blog-thumbnail" />
                        </div>
                        <MDBCardBody className="d-flex flex-column p-3">
                          <h5 className="blog-card-title">{blog.title}</h5>
                          <p className="blog-date">{blog.date}</p>
                          <p className="blog-content-preview">{blog.content}</p>
                          <div>
                            <button className="read-more-btn">Read More →</button>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </Link>
                  </MDBCol>
                ))
              ) : (
                <p className="no-results">No blogs found for "{searchQuery}"</p>
              )}
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default BlogList;
