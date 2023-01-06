import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/yash-kumar-48310819b/ "
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/Yashk786" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="mailto:yashk7366@gmail.com">
        <GrMail />
      </a>
    </div>
  </div>
);

export default SocialMedia;
