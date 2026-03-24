import "./TechStack.css";

// Replace these placeholders with your actual Google Drive sharing links
// Note: Ensure the link's access is set to "Anyone with the link can view"
const googleDriveLinks = [
  "", "", "", "", "", ""
];

const getDriveEmbedUrl = (url: string) => {
  if (!url) return "";
  // Check for standard Google Drive share URL format
  const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }
  return url; // fallback
};

const TechStack = () => {
  return (
    <div className="techstack-container section-container" id="my-edits">
      <h2 className="techstack-title">My Edits</h2>
      <div className="video-grid">
        {googleDriveLinks.map((url, i) => (
          <div key={i} className="video-box">
             {url ? (
               <iframe 
                 src={getDriveEmbedUrl(url)} 
                 allow="autoplay" 
                 allowFullScreen
                 frameBorder="0"
                 className="edit-video"
                 title={`Edit Video ${i + 1}`}
               ></iframe>
             ) : (
               <div className="edit-video placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', border: '1px dashed #333' }}>
                 <span>Add GDrive Link Here</span>
               </div>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
