import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./youtube.css";
import Footer from "../../component/Footer/footer";

type Video = {
  id: string;
  title: string;
};

export default function YoutubePage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  //const [searchQuery, setSearchQuery] = useState<string>("");
  const [pageToken, setPageToken] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState<number>(0);

  const API_KEY =   "AIzaSyCl3-QoioozwyMq0S6YCeGBs5GYdsKe_YI"; //"AIzaSyAt6VB6C_aeO7JPSHmo13wdB5hWxXCBWPw";//
  const CHANNEL_ID = "UCE3dJgl47TZQNLDZYJff_AQ";
  const MAX_RESULTS = 20;

  useEffect(() => {
    fetchVideos(true);
  }, []); // Refetch when search changes

  const fetchVideos = async (reset = false) => {
    try {
      setLoading(true);
      //let searchParam = searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : "";

      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&pageToken=${pageToken || ""}&key=${API_KEY}`
      );
      const searchData = await searchResponse.json();

      if (!searchData.items) {
        console.warn("No videos found");
        setLoading(false);
        return;
      }

      const videoIds = searchData.items.map((item: any) => item.id.videoId).join(",");
      setPageToken(searchData.nextPageToken || null);
      setTotalResults(searchData.pageInfo?.totalResults || 0);

      const detailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${API_KEY}`
      );
      const detailsData = await detailsResponse.json();

      if (!detailsData.items) {
        console.warn("No video details found");
        setLoading(false);
        return;
      }

      const shortVideos = searchData.items
        .filter((item: any, index: number) => {
          const duration = detailsData.items[index]?.contentDetails?.duration || "";
          return duration.includes("M") === false;
        })
        .map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
        }));

      setVideos(reset ? shortVideos : [...videos, ...shortVideos]);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const getThumbnail = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  const trimTitle = (title: string) => {
    return title.length > 60 ? title.substring(0, 57) + "..." : title; // Limit title to 2 lines
  };

  return (
    <>
      <div className="video-page">
        <h2 className="header">Fresh Shorts</h2>

        {/* Search Bar
        <input
          type="text"
          placeholder="Search Shorts..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPageToken(null); // Reset pagination
            fetchVideos(true);
          }}
        /> */}

        <div className="video-grid">
          {loading && videos.length === 0
            ? Array.from({ length: MAX_RESULTS }).map((_, index) => (
                <div key={index} className="video-item">
                  <div className="video-card">
                    <Skeleton height={250} />
                    <Skeleton width="80%" height={20} />
                  </div>
                </div>
              ))
            : videos.map((video) => (
                <div key={video.id} className="video-item" onClick={() => setPlayingVideo(video.id)}>
                  <div className="video-card">
                    {playingVideo === video.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          width: "100%",
                          aspectRatio: "9 / 16",
                          borderRadius: "8px",
                        }}
                      ></iframe>
                    ) : (
                      <img
                        src={getThumbnail(video.id)}
                        alt={video.title}
                        className="thumbnail"
                        style={{ objectFit: "cover", aspectRatio: "9 / 16", width: "100%", borderRadius: "8px" }}
                      />
                    )}
                    <p className="video-title">{trimTitle(video.title)}</p>
                  </div>
                </div>
              ))}
        </div>

        {/* Pagination */}
        {pageToken && (
          <button className="load-more" onClick={() => fetchVideos()} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}
