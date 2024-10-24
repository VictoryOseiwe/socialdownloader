import Header from "../../components/head/Header";
import DownloadForm from "../../components/downloadform/DownloadForm";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import VideoTitle from "../../components/VideoTitle";
import DownloadCard from "../../components/downloadCard/DownloadCard";
import { useNavigate } from "react-router-dom";
import KeyFeaturesWriteup from "../../components/keyfeatureswriteup/KeyFeaturesWriteup";

export default function Facebook() {
  const [videoInfo, setVideoInfo] = useState(null);
  const navigate = useNavigate();

  function handleVideoDetails(details) {
    setVideoInfo(details);
  }

  function handleBackHome() {
    navigate("/facebook"); // Navigate to home page
    setVideoInfo(!videoInfo);
  }

  return (
    <>
      <div className="body-container">
        <Header />

        {!videoInfo && (
          <DownloadForm
            socialMediaName="Facebook"
            placeholder="Enter Facebook video URL"
            videoDetails={handleVideoDetails}
          />
        )}
        {videoInfo && (
          <DownloadCard
            title={videoInfo.title}
            SD="Download Video"
            SDvideoLink={videoInfo.video}
            thumbnail={videoInfo.thumbnail}
            onClick={handleBackHome}
          />
        )}

        <KeyFeaturesWriteup />
        <Footer />
      </div>
    </>
  );
}
