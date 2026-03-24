import "./TechStack.css";

// Replace these placeholders with your actual YouTube video links
// e.g., "https://www.youtube.com/watch?v=dQw4w9WgXcQ" or "https://youtu.be/dQw4w9WgXcQ"
const youtubeLinks = [
  "", "", "", "", "", ""
];

const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return "";
  let videoId = "";
  
  // Handle youtu.be format
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  } 
  // Handle youtube.com/watch?v= format
  else if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    videoId = urlParams.get("v") || "";
  }
  // Handle already embedded format
  else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1]?.split("?")[0];
  }

  if (videoId) {
    // Adding autoplay=1, mute=1, controls=0, and loop=1 (which requires playlist=videoId)
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0`;
  }
  return url; // fallback
};

const TechStack = () => {
  return (
    <div className="techstack-container section-container" id="my-edits">
      <h2 className="techstack-title">My Edits</h2>
      <div className="video-grid">
        {youtubeLinks.map((url, i) => (
          <div key={i} className="video-box" style={{ pointerEvents: 'none' }}>
             {url ? (
               <iframe 
                 src={getYouTubeEmbedUrl(url)} 
                 allow="autoplay; encrypted-media" 
                 allowFullScreen
                 frameBorder="0"
                 className="edit-video"
                 title={`Edit Video ${i + 1}`}
               ></iframe>
             ) : (
               <div className="edit-video placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', border: '1px dashed #333' }}>
                 <span>Add YouTube Link Here</span>
               </div>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
