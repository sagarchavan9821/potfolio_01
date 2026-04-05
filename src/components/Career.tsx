import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Learning
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSC.CS</h4>
                <h5>Vivekanand Arts, Sardar Dalip Singh Commerce & Science College</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati
              Sambhajinagar, Maharashtra. Studying Computer Science with
              focus on programming and data structures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Bootcamp: From Zero to Hero</h4>
                <h5>Udemy</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Learned core Python concepts, OOP, and real-world project
              development. Built practical projects applying Python
              fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
