import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sagarchavnsc9821@gmail.com" data-cursor="disable">
                sagarchavnsc9821@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917875728899" data-cursor="disable">
                +91 78757 28899
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/sagar-chavan-b28a50298"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://github.com/sagarchavan9821"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Location</h4>
            <p>Krati Nagar, Chhatrapati Sambhajinagar, Maharashtra</p>
            <h2>
              <span>Sagar Chavan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
