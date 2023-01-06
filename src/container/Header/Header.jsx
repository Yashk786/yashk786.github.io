import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import Background from "./Background";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <motion.div className="app__header header__flex ">
    <div className="header__container">
      <h2 className="heading ">
        Hi, I'm Yash a passionate <br /> front-end developer.{" "}
      </h2>
      <p className="paragraph">
        I create modern UI based on your design and <br />
        build interactive Websites.
      </p>
      <span className="span">Stick around to see some of my work.</span>

      <a href="#portfolio" className="text button">
        See my latest projects
      </a>
    </div>
    <Background />
  </motion.div>
);

export default AppWrap(
  MotionWrap(Header, "app__works"),
  "home",
  "app__primarybg"
);
