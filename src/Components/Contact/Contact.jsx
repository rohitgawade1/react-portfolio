import React, {useRef, useState} from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();
    // const [value, setValue] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n2pns1k",
        "template_0wpp6dd",
        form.current,
        "s3GLKydXus11pSu3Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

//   const handleClick = (e) => {
//     e.preventDefault();
//     sendEmail();
//     setValue(true);
//   }

  return (
    <div className="contact" id="Contact">
      <div className="e-heading">
        <span>
          Contact <span className="a-span">Me</span>{" "}
        </span>
        <hr />
      </div>
      <div className="c-desc">
        <div className="c-left">
          <span>CONTACT INFO</span>
          <div className="c-info">
            <span>
              <MdEmail style={{ color: "orange" }} /> rohitgawade0102@gmail.com
            </span>
            <span>
              <FaPhoneAlt style={{ color: "orange" }} /> +91 8208704034
            </span>
            <span>
              <ImLocation2 style={{ color: "orange" }} /> Pune, MH.
            </span>
          </div>
        </div>
        <div className="c-right">
          <form className="form" ref={form}>
            <input name="user_name" type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input name="project" type="text" placeholder="Project" />
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="send-btn" onClick={sendEmail}>
              <RiSendPlaneFill /> Send
            </button>
          </form>
          {/* <div>
          {value && <span>Thank You for contacting me</span>}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
