import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSearch, faCalendarAlt, faClock, faPaperPlane,
  faChevronRight, faLeaf, faUsers, faAward, faGlobe,
  faTools, faEnvelope, faPlayCircle
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../../component/Footer/footer";
import "./blog.css";

// Local Fallback Images & Banner
import blogHero from "../../images/blog_hero.png";
import stoolsImg from "../../images/stools.jpg";
import sofaImg from "../../images/sofaset.jpg";
import basketImg from "../../images/basket.jpg";
import kidChairImg from "../../images/kidChair5.jpg";
import bambooSofaImg from "../../images/bambooSofa.jpg";

const API_KEY = "AIzaSyCl3-QoioozwyMq0S6YCeGBs5GYdsKe_YI";
const FOLDER_ID = "102qSDvLtKj5z7Uibu6PqgXDgraoHoXD2";

interface Blog {
  id: string;
  title: string;
  date: string;
  content: string;
  thumbnail: string;
  category: string;
  readTime: string;
}

const BlogList: React.FC = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All Blogs");

  const categories = [
    "All Blogs",
    "Furniture Care",
    "Sustainability",
    "Home Decor",
    "Design Inspiration",
    "Tips & Guides",
    "Trends"
  ];

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
        data.files.map(async (file: any, index: number) => {
          const fileUrl = `https://docs.google.com/document/d/${file.id}/export?format=txt`;
          const fileResponse = await fetch(fileUrl);
          const htmlContent = await fileResponse.text();
          const textContent = stripHTML(htmlContent);
          
          // Determine Category dynamically based on title & text content
          const category = determineCategory(file.name, textContent);
          // Calculate mock read time
          const wordCount = textContent.split(/\s+/).length;
          const readMinutes = Math.max(3, Math.min(10, Math.floor(wordCount / 200)));
          const readTime = `${readMinutes} min read`;

          // Local fallback images round-robin
          const fallbackImages = [stoolsImg, sofaImg, basketImg, kidChairImg, bambooSofaImg];
          const localFallback = fallbackImages[index % fallbackImages.length];

          return {
            id: file.id,
            title: formatFileName(file.name, 60),
            date: formatDate(file.createdTime),
            content: textContent.substring(0, 150) + "...",
            thumbnail: extractThumbnail(htmlContent, localFallback),
            category,
            readTime
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

  const extractThumbnail = (htmlString: string, fallbackUrl: string): string => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    const img = div.querySelector("img");
    return img ? img.src : fallbackUrl;
  };

  const formatFileName = (fileName: string, maxLength: number = 60): string => {
    let formattedName = fileName.replace(/\..+$/, "").replace(/[-_]/g, " ").trim();
    return formattedName.length > maxLength ? formattedName.substring(0, maxLength) + "..." : formattedName;
  };

  const formatDate = (dateString: string): string => {
    const formattedDate = new Date(dateString);
    return formattedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const determineCategory = (title: string, content: string): string => {
    const combined = (title + " " + content).toLowerCase();
    if (combined.includes("care") || combined.includes("clean") || combined.includes("maintain") || combined.includes("protect")) {
      return "Furniture Care";
    }
    if (combined.includes("sustain") || combined.includes("eco") || combined.includes("environment") || combined.includes("green")) {
      return "Sustainability";
    }
    if (combined.includes("decor") || combined.includes("room") || combined.includes("lantern") || combined.includes("basket") || combined.includes("lamp")) {
      return "Home Decor";
    }
    if (combined.includes("inspiration") || combined.includes("style") || combined.includes("ideas") || combined.includes("modern")) {
      return "Design Inspiration";
    }
    if (combined.includes("tips") || combined.includes("guide") || combined.includes("how") || combined.includes("cost") || combined.includes("rope")) {
      return "Tips & Guides";
    }
    if (combined.includes("trend") || combined.includes("weaving") || combined.includes("art") || combined.includes("craft")) {
      return "Trends";
    }
    
    // Fallback round-robin-like based on string length
    const catIndex = (title.length % 6) + 1;
    const fallbackCats = [
      "Furniture Care",
      "Sustainability",
      "Home Decor",
      "Design Inspiration",
      "Tips & Guides",
      "Trends"
    ];
    return fallbackCats[catIndex - 1];
  };

  // Filter Blogs based on Search & Active Category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All Blogs" || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Our Blogs - Ecowoodies</title>
        <meta name="description" content="Read our latest stories, design tips, sustainability practices and guide about bamboo and cane furniture." />
      </Helmet>

      <div className="blogs-page">
        {/* Background Decorative Patterns */}
        <div className="blogs-bg-patterns">
          {/* Blurred Glow Spheres */}
          <div className="bg-glow glow-1" />
          <div className="bg-glow glow-2" />
          <div className="bg-glow glow-3" />

          {/* Leaf Watermarks */}
          <div className="bg-pattern pattern-left-1">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
          <div className="bg-pattern pattern-right-1">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
          <div className="bg-pattern pattern-left-2">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
          <div className="bg-pattern pattern-right-2">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
        </div>

        {/* Hero Section */}
        <section className="blogs-hero">
          <div className="blogs-hero-content">
            <span className="section-badge">OUR BLOGS</span>
            <h1 className="hero-title">Explore Our<br />Latest <span className="title-accent">Blogs</span></h1>
            <p className="hero-desc">
              Stay inspired and informed with the latest insights, tips, and stories.
            </p>
            
            {/* Search Bar */}
            <div className="search-bar-wrapper">
              <span className="search-icon"><FontAwesomeIcon icon={faSearch} /></span>
              <input
                type="text"
                placeholder="Search blogs..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="blogs-hero-image">
            <img src={blogHero} alt="Cane chair interior" className="hero-banner-img" />
          </div>

          {/* Wavy Section Divider */}
          <div className="section-wave wave-green">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,32 C240,70 480,90 720,70 C960,50 1200,70 1440,32 L1440,120 L0,120 Z" fill="#2d4c36" />
            </svg>
          </div>
        </section>

        {/* Category Filters */}
        <section className="category-filters-section">
          <div className="filters-container">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Blogs Cards Grid */}
        <section className="blogs-grid-section">
          <div className="blogs-grid">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div className="blog-card-skeleton" key={index}>
                    <Skeleton height={220} borderRadius="8px 8px 0 0" />
                    <div style={{ padding: "1.5rem" }}>
                      <Skeleton width="40%" height={15} style={{ marginBottom: "1rem" }} />
                      <Skeleton width="90%" height={25} style={{ marginBottom: "1rem" }} />
                      <Skeleton width="60%" height={15} style={{ marginBottom: "1rem" }} />
                      <Skeleton count={2} height={15} style={{ marginBottom: "1.5rem" }} />
                      <Skeleton width="30%" height={20} />
                    </div>
                  </div>
                ))
              : filteredBlogs.length > 0
              ? filteredBlogs.map((blog) => (
                  <div className="blog-card" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} className="blog-card-img-link">
                      <div className="blog-img-box">
                        <img src={blog.thumbnail} alt={blog.title} className="blog-thumbnail" />
                      </div>
                    </Link>
                    <div className="blog-card-body">
                      <span className="blog-card-category-tag">{blog.category}</span>
                      <h3 className="blog-card-title">
                        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                      </h3>
                      <div className="blog-card-meta">
                        <span className="meta-item">
                          <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" /> {blog.date}
                        </span>
                        <span className="meta-divider">|</span>
                        <span className="meta-item">
                          <FontAwesomeIcon icon={faClock} className="meta-icon" /> {blog.readTime}
                        </span>
                      </div>
                      <p className="blog-card-snippet">{blog.content}</p>
                      <Link to={`/blogs/${blog.id}`} className="blog-read-more-link">
                        Read More <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
                      </Link>
                    </div>
                  </div>
                ))
              : (
                <div className="no-blogs-found text-center">
                  <p>No blogs found matching your selection.</p>
                </div>
              )}
          </div>
        </section>

        {/* Newsletter Subscription Banner */}
        <section className="blogs-newsletter-banner">
          <div className="newsletter-left">
            <span className="newsletter-play-icon">
              <FontAwesomeIcon icon={faPlayCircle} />
            </span>
            <div className="newsletter-text">
              <h4>Love what you see?</h4>
              <p>Subscribe to our newsletter for more ideas, craftsmanship & sustainable living.</p>
            </div>
          </div>

          <div className="newsletter-right">
            <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="newsletter-email-input"
              />
              <button type="submit" className="newsletter-submit-btn">
                Subscribe Now <FontAwesomeIcon icon={faPaperPlane} className="btn-send-icon" />
              </button>
            </form>
          </div>

          {/* Wavy Section Divider */}
          <div className="section-wave wave-green">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,32 C240,70 480,90 720,70 C960,50 1200,70 1440,32 L1440,120 L0,120 Z" fill="#2d4c36" />
            </svg>
          </div>
        </section>

        {/* Bottom Highlights Badges */}
        <section className="blogs-bottom-badges">
          <div className="badge-card-item">
            <span className="badge-card-icon"><FontAwesomeIcon icon={faLeaf} /></span>
            <div className="badge-card-text">
              <h6>Eco-Friendly Products</h6>
              <p>100% organic and green</p>
            </div>
          </div>

          <div className="badge-card-item">
            <span className="badge-card-icon"><FontAwesomeIcon icon={faTools} /></span>
            <div className="badge-card-text">
              <h6>Handcrafted with Precision</h6>
              <p>Meticulously styled by hand</p>
            </div>
          </div>

          <div className="badge-card-item">
            <span className="badge-card-icon"><FontAwesomeIcon icon={faLeaf} /></span>
            <div className="badge-card-text">
              <h6>Sustainable Materials</h6>
              <p>Responsibly sourced cane & wood</p>
            </div>
          </div>

          <div className="badge-card-item">
            <span className="badge-card-icon"><FontAwesomeIcon icon={faUsers} /></span>
            <div className="badge-card-text">
              <h6>Supporting Artisans</h6>
              <p>Empowering rural craft makers</p>
            </div>
          </div>

          <div className="badge-card-item">
            <span className="badge-card-icon"><FontAwesomeIcon icon={faGlobe} /></span>
            <div className="badge-card-text">
              <h6>Worldwide Delivery</h6>
              <p>Shipping to all destinations</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default BlogList;
