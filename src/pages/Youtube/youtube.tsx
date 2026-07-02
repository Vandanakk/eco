import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCouch, faChair, faLightbulb, faUtensils, 
  faArchive, faBaby, faSun, faTools, faThLarge,
  faPlay, faChevronRight, faLeaf, faUsers, 
  faAward, faGlobe, faPlayCircle, faBell
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../component/Footer/footer";
import "./youtube.css";

// Banner Image
import videoHero from "../../images/video_hero.png";

type Video = {
  id: string;
  title: string;
  category: string;
};

export default function YoutubePage() {
  const { t } = useTranslation();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("Furniture");

  const API_KEY = "AIzaSyCl3-QoioozwyMq0S6YCeGBs5GYdsKe_YI";
  const CHANNEL_ID = "UCE3dJgl47TZQNLDZYJff_AQ";
  const MAX_RESULTS = 40; // Fetch more to distribute across categories

  const categoryOptions = [
    { name: "Furniture", icon: faCouch },
    { name: "Chairs & Seating", icon: faChair },
    { name: "Home Décor", icon: faLightbulb },
    { name: "Kitchen & Dining", icon: faUtensils },
    { name: "Storage & Organizers", icon: faArchive },
    { name: "Kids & Baby", icon: faBaby },
    { name: "Outdoor", icon: faSun },
    { name: "Craftsmanship", icon: faTools },
    { name: "Collections", icon: faThLarge }
  ];

  // Primary categories to show in sections
  const sections = ["Furniture", "Home Décor", "Chairs & Seating", "Outdoor"];

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const searchResponse = await fetch(
        `https://www.googleapis.com/drive/v3/files?q=name+contains+'shorts'+key=${API_KEY}` // Note: keeping current api parameters as fallback or direct fetch
      );
      // Wait, let's fetch using the channel API like the original file
      const searchDataResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}`
      );
      const searchData = await searchDataResponse.json();

      if (!searchData.items) {
        console.warn("No videos found");
        setLoading(false);
        return;
      }

      const videoIds = searchData.items.map((item: any) => item.id.videoId).join(",");

      const detailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${API_KEY}`
      );
      const detailsData = await detailsResponse.json();

      if (!detailsData.items) {
        console.warn("No video details found");
        setLoading(false);
        return;
      }

      const mappedVideos = searchData.items
        .filter((item: any, index: number) => {
          // Keep all videos, or filter if duration is too long
          const duration = detailsData.items[index]?.contentDetails?.duration || "";
          return duration.includes("M") === false; // Focus on shorts
        })
        .map((item: any) => {
          const title = item.snippet.title;
          const category = determineVideoCategory(title);
          return {
            id: item.id.videoId,
            title,
            category
          };
        });

      setVideos(mappedVideos);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const determineVideoCategory = (title: string): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("decor") || lowerTitle.includes("lantern") || lowerTitle.includes("lamp") || lowerTitle.includes("light") || lowerTitle.includes("pot") || lowerTitle.includes("planter")) {
      return "Home Décor";
    }
    if (lowerTitle.includes("sofa") || lowerTitle.includes("dining") || lowerTitle.includes("table") || lowerTitle.includes("cabinet") || lowerTitle.includes("furniture") || lowerTitle.includes("bed")) {
      return "Furniture";
    }
    if (lowerTitle.includes("chair") || lowerTitle.includes("stool") || lowerTitle.includes("seat") || lowerTitle.includes("pouf") || lowerTitle.includes("bench") || lowerTitle.includes("rocker")) {
      return "Chairs & Seating";
    }
    if (lowerTitle.includes("outdoor") || lowerTitle.includes("patio") || lowerTitle.includes("garden") || lowerTitle.includes("swing") || lowerTitle.includes("pergola") || lowerTitle.includes("lounger") || lowerTitle.includes("sun")) {
      return "Outdoor";
    }
    
    // Fallback round-robin based on title length
    const options = ["Furniture", "Home Décor", "Chairs & Seating", "Outdoor"];
    const index = title.length % options.length;
    return options[index];
  };

  const getThumbnail = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  const trimTitle = (title: string) => {
    return title.length > 55 ? title.substring(0, 52) + "..." : title;
  };

  // Filter videos for a specific section
  const getVideosForCategory = (cat: string) => {
    return videos.filter((v) => v.category === cat).slice(0, 6); // Max 6 per section
  };

  // Scroll to a specific category section
  const handleCategoryClick = (catName: string) => {
    setActiveCategoryFilter(catName);
    const element = document.getElementById(`section-${catName.toLowerCase().replace(/[^a-z]/g, "")}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Videos & Shorts - Ecowoodies</title>
        <meta name="description" content="Watch our latest YouTube shorts, product features, and crafting guides." />
      </Helmet>

      <div className="videos-page-wrapper">
        {/* Hero Section */}
        <section className="videos-hero">
          <div className="videos-hero-content">
            <span className="section-badge">OUR VIDEOS</span>
            <h1 className="hero-title">Inspiration in Every Frame.<br />Crafted for You.</h1>
            <div className="hero-divider-green"></div>
            <p className="hero-desc">
              Explore ideas, craftsmanship and sustainable living through our curated video collection.
            </p>
          </div>

          <div className="videos-hero-image">
            <img src={videoHero} alt="Sofa and chair interior" className="hero-banner-img" />
          </div>
        </section>

        {/* Browse By Category Section */}
        <section className="browse-category-section">
          <div className="section-header text-center">
            <span className="browse-badge">BROWSE BY CATEGORY</span>
          </div>

          <div className="category-icons-grid">
            {categoryOptions.map((cat) => (
              <button 
                key={cat.name} 
                className={`category-icon-card ${activeCategoryFilter === cat.name ? "active" : ""}`}
                onClick={() => handleCategoryClick(cat.name)}
              >
                <span className="category-card-icon">
                  <FontAwesomeIcon icon={cat.icon} />
                </span>
                <span className="category-card-label">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Video Sections */}
        <section className="videos-lists-section">
          {sections.map((sectionName) => {
            const sectionVideos = getVideosForCategory(sectionName);
            const sectionId = `section-${sectionName.toLowerCase().replace(/[^a-z]/g, "")}`;
            
            return (
              <div key={sectionName} id={sectionId} className="category-shelf-row">
                <div className="shelf-header">
                  <h2 className="shelf-title">{sectionName.toUpperCase()}</h2>
                  <a 
                    href="https://www.youtube.com/channel/UCE3dJgl47TZQNLDZYJff_AQ" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="shelf-view-all"
                  >
                    View All <FontAwesomeIcon icon={faChevronRight} className="shelf-arrow" />
                  </a>
                </div>

                <div className="video-cards-grid">
                  {loading && videos.length === 0
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="video-card-skeleton">
                          <Skeleton height={280} borderRadius="8px" />
                          <Skeleton height={15} width="80%" style={{ marginTop: "1rem" }} />
                        </div>
                      ))
                    : sectionVideos.map((video) => (
                        <div 
                          key={video.id} 
                          className="video-item-card" 
                          onClick={() => setPlayingVideo(video.id)}
                        >
                          <div className="video-thumbnail-box">
                            {playingVideo === video.id ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="video-iframe"
                              ></iframe>
                            ) : (
                              <>
                                <img
                                  src={getThumbnail(video.id)}
                                  alt={video.title}
                                  className="video-thumb-img"
                                />
                                <div className="video-play-overlay">
                                  <span className="play-icon-circle">
                                    <FontAwesomeIcon icon={faPlay} />
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
                          <p className="video-title-under">{trimTitle(video.title)}</p>
                        </div>
                      ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Subscribe Banner Section */}
        <section className="videos-subscribe-banner">
          <div className="subscribe-left">
            <span className="subscribe-play-icon">
              <FontAwesomeIcon icon={faPlayCircle} />
            </span>
            <div className="subscribe-text">
              <h4>Love what you see?</h4>
              <p>Subscribe to our channel for more videos, craftsmanship & sustainable living.</p>
            </div>
          </div>

          <div className="subscribe-right">
            <a 
              href="https://www.youtube.com/channel/UCE3dJgl47TZQNLDZYJff_AQ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="subscribe-btn-green"
            >
              Subscribe Now <FontAwesomeIcon icon={faBell} className="btn-bell-icon" />
            </a>
          </div>
        </section>

        {/* Bottom Banner Row */}
        <section className="videos-bottom-badges">
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
}
