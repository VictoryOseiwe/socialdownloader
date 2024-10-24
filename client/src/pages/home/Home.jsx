import React, { useState } from "react";
import Header from "../../components/head/Header";
import "./Home.css";
import DownloadForm from "../../components/downloadform/DownloadForm";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import DownloadCard from "../../components/downloadCard/DownloadCard";
import KeyFeaturesWriteup from "../../components/keyfeatureswriteup/KeyFeaturesWriteup";

export default function Home() {
  const [videoInfo, setVideoInfo] = useState(null); // To store video details
  const navigate = useNavigate(); // To navigate to different routes

  function handleVideoDetails(details) {
    setVideoInfo(details); // Set video details when received from the form
  }

  function handleBackHome() {
    navigate("/"); // Navigate to home page
    setVideoInfo(!videoInfo);
  }

  return (
    <>
      <div className="home-container body-container">
        <Header />

        {/* Show DownloadForm if videoInfo is not available */}
        {!videoInfo && (
          <DownloadForm
            socialMediaName="Youtube"
            placeholder="Enter Youtube video URL"
            videoDetails={handleVideoDetails}
            setVideoInfo={setVideoInfo} // Pass function to set video data
          />
        )}

        {/* Show video details and download card once videoInfo is available */}
        {videoInfo && (
          <DownloadCard
            title={videoInfo.title}
            duration={videoInfo.duration}
            thumbnail={videoInfo.thumbnail}
            SD="Download Video"
            SDvideoLink={videoInfo.video}
            onClick={handleBackHome}
          />
        )}

        <KeyFeaturesWriteup />

        <Footer />
      </div>
    </>
  );
}
