import React, { useState } from "react";
import "./youtube.css";
import Footer from "../../component/Footer/footer";
// Mock Video Data
const videos = [
  {
    id: "pkLxJmKdknQ",
    title: "Rattan Children's Chair | Rattan Garden Handmade Small Chair, Countryside Kids Chair #ecowoodies",
  },
  {
    id: "euqBJv7NtIs",
    title: "Artisanal Bamboo Floor Pouf | Eco-Friendly Bohemian Footstool #ecowoodies",
  },
  {
    id: "F70fbJmzhkY",
    title: "Bamboo Chair Home Decor Wicker Chair | Handcrafted Outdoor Garden Chair #ecowoodies",
  },
  {
    id: "U2GbtPr641k",
    title: "Bamboo Rattan Storage Table | Side Table Storage Box | Boho Storage Table #ecowoodies",
  },
  {
    id: "Bp8VY5a4GOM",
    title: "ACCENT CAFE TABLE CHAIRS, WOODEN DINING CHAIR , BAMBOO TABLE CHAIRS, RATTAN DINING SETS #ecowoodies",
  },
  {
    id: "_4vMOa4lpT8",
    title: "Bamboo Rattan Handwoven Organizer - Boho Magazine & Utility Rack #ecowoodies",
  },
  {
    id: "lvX2EOp7iP0",
    title: "Patio Lounge Chair, Rattan Outdoor Garden Chair , Home Decor Dining Chair #ecowoodies",
  },
  {
    id: "qPt27Ih-DPk",
    title: "Rattan Weaving Shelves, Basket Shelves Corner Bookshelf Walls, Rattan Shelving Unit #ecowoodies",
  },
  {
    id: "cxEvFFFIqaY",
    title: "Animal-Shaped Bamboo Rattan Basket, Kids Room Decor Baskets #ecowoodies",
  },
  {
    id: "w3vaGv7yJv4",
    title: "Midcentury Handwoven Sofa Natural Bamboo Rattan Boho Living Room Sofas #ecowoodies",
  },
  {
    id: "CJ_hRuYYsfY",
    title: "Handwoven Rattan Chairs | Outdoor Garden Lounge Chairs | Boho Style Minimalist Chairs #ecowoodies",
  },
  {
    id: "cKZf2gSstPY",
    title: "Bamboo Sun Lounger | Handcrafted Bamboo Sunbed | Foldable Light Weight Beach Chair #ecowoodies",
  },
  {
    id: "8Dv9zSF0HYM",
    title: "Bamboo Rattan Planters | Handwoven Knitted Pots | Home Decor Boho Style Planters #ecowoodies",
  },
  {
    id: "tlwd-k4cUAo",
    title: "Expert Guide: Natural Fiber Furniture Restoration Mastery #ecowoodies",
  },
  {
    id: "KyEVIIMwuQs",
    title: "Bamboo Steamer For Nutritious Cooking, Dim Sum Food Container #ecowoodies",
  },
  {
    id: "b-cQJ-5UlGE",
    title: "Empowering Artisans Overcoming Labor Skill Shortages in the Bamboo and Cane Furniture Industry",
  },
  {
    id: "Dkr6iw5MJp4",
    title: "Bamboo Wood Round Salt Box Kitchen Storage Case Container Holder Spice Organizer #ecowoodies",
  },
  {
    id: "xsDT3zskrvk",
    title: "Round Rattan Wicker Fruit Baskets Natural Storage Box | Bamboo Woven Bread Basket #ecowoodies",
  },
  {
    id: "_Pp5_Rc2m7U",
    title: "Rattan Handwoven Designer Coaster | Round Rattan Coaster | Woven Placemat #ecowoodies",
  },
];

type Video = {
  id: string;
  title: string;
};

export default function YoutubePage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const trimTitle = (title: string, maxLength: number) => {
    return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  };

  const getThumbnail = (id: string) => {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  };

  return (
    <>
    <div className="video-page">
      <h2 className="header">Fresh Finds</h2>
      {selectedVideo ? (
        <div className="video-player">
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "550px",
              maxWidth: "900px",
              margin: "0 auto",
              display: "block",
            }}
          ></iframe>
          <button onClick={() => setSelectedVideo(null)}>Back</button>
        </div>
      ) : (
        <div className="video-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-item"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="video-card">
                <img
                  src={getThumbnail(video.id)}
                  alt={video.title}
                  className="thumbnail"
                  style={{
                    objectFit: "cover",
                    aspectRatio: "9 / 16",
                    width: "100%",
                  }}
                  onError={(e) =>
                    (e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/default.jpg`)
                  }
                />
                <p className="video-title">{trimTitle(video.title, 50)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div> 
    <Footer />
    </>
  );
}
