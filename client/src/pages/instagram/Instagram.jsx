import Header from "../../components/head/Header";
import DownloadForm from "../../components/downloadform/DownloadForm";
import Footer from "../../components/footer/Footer";
import "./Instagram.css";
import { useState } from "react";
import KeyFeaturesWriteup from "../../components/keyfeatureswriteup/KeyFeaturesWriteup";
import DownloadCard from "../../components/downloadCard/DownloadCard";
import { useNavigate } from "react-router-dom";

export default function Instagram() {
  const [videoInfo, setVideoInfo] = useState(null);
  const navigate = useNavigate();

  function handleVideoDetails(details) {
    setVideoInfo(details);
  }

  function handleBackHome() {
    navigate("/instagram"); // Navigate to home page
    setVideoInfo(!videoInfo);
  }
  return (
    <>
      <div className="body-container ig-container">
        <Header />
        {!videoInfo && (
          <DownloadForm
            socialMediaName="Instagram"
            placeholder="Enter Instagram video URL"
            videoDetails={handleVideoDetails}
            setVideoInfo={setVideoInfo}
          />
        )}

        {videoInfo && (
          <>
            <DownloadCard
              title={videoInfo.title}
              duration={videoInfo.duration}
              thumbnail={videoInfo.thumbnail}
              SD="Download Video"
              SDvideoLink={videoInfo.video}
              onClick={handleBackHome}
            />
          </>
        )}

        <KeyFeaturesWriteup />

        <Footer />
      </div>
    </>
  );
}
