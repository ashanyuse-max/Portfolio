import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MBBS Student</h4>
                <h5>Dr. Rajendra Gode Medical College</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing my Bachelor of Medicine, Bachelor of Surgery (MBBS) degree, balancing rigorous medical studies with my passion for creative tech domains.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Video Editor & Vibe Coder</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2024 - NOW</h3>
            </div>
            <p>
              Working with clients to deliver high-quality fastcut and cinematic video edits using CapCut and Premiere Pro. Also developing interactive frontend experiences and websites utilizing vibe coding techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
