export default function VideoTitle({ title }) {
  function truncateTitle(title) {
    if (!title) {
      return "No title specified";
    }
    if (title.length > 50) {
      return title.slice(0, 50) + "...";
    }
    return title;
  }

  return <h2 className="videotitle">{truncateTitle(title)}</h2>;
}
