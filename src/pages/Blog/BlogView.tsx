import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCardBody,
} from "mdb-react-ui-kit";
import Helmet from "react-helmet";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./blog.css";
import Footer from "../../component/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';

const API_KEY = "AIzaSyCl3-QoioozwyMq0S6YCeGBs5GYdsKe_YI"; // Replace with your API Key
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

  // B2B RFQ States
  const [rfqData, setRfqData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isRfqSubmitting, setIsRfqSubmitting] = useState(false);
  const [rfqSuccess, setRfqSuccess] = useState(false);

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

  const handleRfqChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRfqData({ ...rfqData, [e.target.name]: e.target.value });
  };

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, company, message } = rfqData;

    if (name && email && company && message) {
      setIsRfqSubmitting(true);
      const emailParams = {
        from_name: name,
        phone: `Company: ${company}`,
        reply_to: email,
        message: message
      };

      emailjs.send('service_tc8ac9a', 'template_0l67lvq', emailParams, '3wu5xegb9BGPZ678e')
        .then((result) => {
          setRfqSuccess(true);
          setRfqData({
            name: "",
            email: "",
            company: "",
            message: "",
          });
          setIsRfqSubmitting(false);
        }, (error) => {
          console.error("RFQ Submit Error:", error);
          setIsRfqSubmitting(false);
          alert("Something went wrong, please try again or contact us directly at info@ecowoodies.com.");
        });
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} - Ecowoodies Exporter</title>
        <meta name="description" content={`Read more about ${title}. B2B cane and bamboo exporter.`} />
      </Helmet>
      
      <div className="blogs-page blog-view-page">
        <MDBContainer className="blog-view-container bg-white">
          <article>
            <Link to="/blogs" className="back-link">
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

            {/* Layout Grid */}
            <div className="blog-layout-grid">
              {/* Main Column */}
              <div className="blog-main-column">
                {loading ? (
                  <div className="blog-skeleton">
                    <Skeleton count={8} height={20} width="100%" />
                    <Skeleton height={200} width="100%" className="my-3" />
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
              </div>

              {/* Sidebar Column */}
              <aside className="blog-sidebar-column">
                {/* Exporter Info Card */}
                <div className="sidebar-card trust-card">
                  <span className="badge-verified">VERIFIED EXPORTER</span>
                  <h3>Factory Export Specifications</h3>
                  <p className="trust-intro">
                    Ecowoodies is a premier B2B manufacturer & exporter of handmade bamboo, rattan, and sarkanda furniture.
                  </p>
                  <ul className="trust-metrics">
                    <li><strong>Minimum Order:</strong> 1x20' Container</li>
                    <li><strong>Average Lead Time:</strong> 30 - 45 Days</li>
                    <li><strong>Custom Branding:</strong> OEM & ODM Available</li>
                    <li><strong>Global Shipping:</strong> US, EU, Middle East</li>
                    <li><strong>Certifications:</strong> Eco-Friendly Materials</li>
                  </ul>
                </div>

                {/* RFQ Form Card */}
                <div className="sidebar-card inquiry-card">
                  <h3>Direct B2B Quote Request</h3>
                  <p>Inquire about custom designs, materials, bulk container pricing, or spec sheets.</p>
                  
                  {rfqSuccess ? (
                    <div className="sidebar-rfq-success">
                      Thank you! Our sales team will get back to you with custom pricing and details within 12 hours.
                    </div>
                  ) : (
                    <form className="sidebar-rfq-form" onSubmit={handleSidebarSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                          value={rfqData.name}
                          onChange={handleRfqChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Business Email"
                          required
                          value={rfqData.email}
                          onChange={handleRfqChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company & Country"
                          required
                          value={rfqData.company}
                          onChange={handleRfqChange}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Specify products, expected quantity (pcs/containers), or custom requirements..."
                          required
                          value={rfqData.message}
                          onChange={handleRfqChange}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="sidebar-rfq-submit-btn"
                        disabled={isRfqSubmitting}
                      >
                        {isRfqSubmitting ? "Sending..." : "Request Bulk Quote"}
                      </button>
                    </form>
                  )}
                  
                  <div className="sidebar-direct-contact">
                    <p>Or contact us directly:</p>
                    <a
                      href="https://wa.me/919686722949"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link whatsapp"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} /> Chat on WhatsApp
                    </a>
                    <a href="mailto:info@ecowoodies.com" className="contact-link email">
                      <FontAwesomeIcon icon={faEnvelope} /> info@ecowoodies.com
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
};

export default BlogView;
