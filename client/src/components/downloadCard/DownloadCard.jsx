import VideoTitle from "../VideoTitle";
import "./DownloadCard.css";

export default function DownloadCard({
  title,
  duration,
  thumbnail,
  SDvideoLink,
  SD,
  HDvideoLink,
  HD,
  onClick,
  ...props
}) {
  return (
    <>
      <div className="downloadcard">
        <VideoTitle title={title} />
        <p>Duration: {duration}</p>
        <img src={thumbnail} alt="thumbnail" />

        <button className="downloadbtn">
          <a href={SDvideoLink} target="_blank" rel="noopener noreferrer">
            {SD}
          </a>
        </button>

        {/* <a href={HDvideoLink}>
          <button>{HD}</button>
        </a> */}
        <button className="downloadbtn backbtn" onClick={onClick}>
          Download another video
        </button>
      </div>
    </>
  );
}
