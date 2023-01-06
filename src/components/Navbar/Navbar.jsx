import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a
          href="https://www.linkedin.com/in/yash-kumar-48310819b/"
          target="_blank"
        >
          <h1 className="name__logo">Yash</h1>
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "features", "portfolio", "skills", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <a
        href="https://drive.google.com/file/d/1mOZam92pN4upSw8KwDIvCn8gzv00iYIT/view?usp=sharing"
        target="_blank"
        class="resume-btn "
      >
        Download Resume
      </a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "features",
                "portfolio",
                "skills",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="media">
                <a
                  href="https://www.linkedin.com/in/yash-kumar-48310819b/ "
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>{" "}
                <a href="https://github.com/Yashk786" target="_blank">
                  <BsGithub />
                </a>{" "}
                <a href="mailto:yashk7366@gmail.com">
                  <GrMail />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
