import Header from "../../components/head/Header";
import DownloadForm from "../../components/downloadform/DownloadForm";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import KeyFeaturesWriteup from "../../components/keyfeatureswriteup/KeyFeaturesWriteup";
import DownloadCard from "../../components/downloadCard/DownloadCard";
import { useNavigate } from "react-router-dom";

export default function Tiktok() {
  const [videoInfo, setVideoInfo] = useState(null);
  const navigate = useNavigate();

  function handleVideoDetails(details) {
    setVideoInfo(details);
    // Now you can use `videoDetails` to render additional info or handle other actions
  }

  function handleBackHome() {
    navigate("/tiktok");
    setVideoInfo(!videoInfo);
  }

  return (
    <>
      <div className="body-container">
        <Header />
        {!videoInfo && (
          <DownloadForm
            socialMediaName="Tiktok"
            placeholder="Enter Tiktok video URL"
            videoDetails={handleVideoDetails}
            setVideoInfo={setVideoInfo}
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
