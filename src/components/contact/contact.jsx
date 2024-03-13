import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact</h1>
      <div className="contact-links">
        <a
          href="https://www.t.me/oya2x2"
          className="contact telegram"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            telegram <span>+7 708 771 12 33</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=77087711233"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+7 708 771 12 33</span>
          </h2>
        </a>

        <a href="#" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>None</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
