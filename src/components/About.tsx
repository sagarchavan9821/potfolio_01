import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Aspiring Machine Learning Engineer with hands-on experience in Python,
          data analysis, and machine learning fundamentals. Familiar with
          libraries like Pandas and Scikit-learn, and passionate about building
          real-world AI solutions. Looking for an opportunity to contribute and
          grow in a data-driven environment.
        </p>
        <a
          href="https://github.com/sagarchavan9821"
          target="_blank"
          className="about-github"
          data-cursor="disable"
        >
          View my GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
