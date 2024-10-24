import { useState } from "react";
import "./DownloadForm.css";
import axios from "axios";
import Swal from "sweetalert2";

export default function DownloadForm({
  socialMediaName,
  placeholder,
  videoDetails,
  setVideoInfo, // Added this to set video data in the parent component
}) {
  const [URL, setURL] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function handleClick() {
    setLoading(true); // Start loading

    const currentRoute = location.pathname;

    // Define the base URL patterns for each social media platform
    const patterns = {
      "/instagram": /^(https?:\/\/)?(www\.)?(m\.)?(instagram\.com\/.+)/,
      "/facebook": /^(https?:\/\/)?(www\.)?(m\.)?(web\.)?(facebook\.com\/.+)/, // Web & mobile fb URLs
      "/tiktok": /^(https?:\/\/)?(www\.)?(m\.)?(tiktok\.com\/.+)/,
      "/youtube":
        /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com\/.+|youtu\.be\/.+)/,
    };

    // Check if the current route has a corresponding pattern
    const regex = patterns[currentRoute];
    if (!regex) {
      Swal.fire("Invalid route.");
      setLoading(false);
      return;
    }

    // Validate the URL based on the current route's platform
    if (!regex.test(URL)) {
      Swal.fire(`Please enter a valid URL for ${socialMediaName}.`);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://socialdownloaderbackend.onrender.com/videoInfo",
        {
          URL,
        }
      );
      videoDetails(response.data); // Pass video details to parent component
      setVideoInfo(response.data); // Store video info to show download card
      setURL("");
    } catch (error) {
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <>
      <div className="downloadformcontainer">
        <h1 className="socialmedianame">{socialMediaName} Video Downloader</h1>
        <form action="" className="formcontainer" onSubmit={handleSubmit}>
          <input
            className="textfield"
            type="text"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
            placeholder={placeholder}
            required
          />
          <button
            onClick={handleClick} // Call handleClick on button click
            className="urlsubmit"
            type="submit"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Loading..." : "Download"} {/* Show loading state */}
          </button>
        </form>
      </div>
    </>
  );
}
