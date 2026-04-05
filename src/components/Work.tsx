import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (box.length === 0) return;
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  const handleResize = () => {
    setTranslateX();
    ScrollTrigger.refresh();
  };

  window.addEventListener("resize", handleResize);

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      pinSpacing: true,
      id: "work",
      invalidateOnRefresh: true,
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  ScrollTrigger.refresh();

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
    window.removeEventListener("resize", handleResize);
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Car Price Prediction</h4>
                  <p>Machine Learning</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Scikit-learn, Pandas, Data Preprocessing, Feature Selection, Regression</p>
            </div>
            <WorkImage image="/images/car-prediction.png" alt="Car Price Prediction Dashboard UI" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Stock Market Analyzer</h4>
                  <p>Data Analysis</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Pandas, Matplotlib, Time-Series Analysis, Data Visualization</p>
            </div>
            <WorkImage image="/images/stock-market.png" alt="Stock Market Analyzer Dashboard UI" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>AI Assistant</h4>
                  <p>Python Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Speech Recognition, Task Automation, Information Retrieval</p>
            </div>
            <WorkImage image="/images/ai-assistant.png" alt="AI Assistant UI Design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
