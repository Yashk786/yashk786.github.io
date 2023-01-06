import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";

const works = [
  {
    name: "LinkedIn-Clone",
    title: "LinkedIn-Clone",
    imgUrl: images.linkedin,
    description:
      " A LinkedIn clone made using React.js and Firebase for the backend service, storage and authentication to make the project flexible.",
    projectLink: "https://yashk786.github.io/linkedIn-clone/",
    codeLink: "https://github.com/Yashk786/linkedIn-clone",
  },
  {
    name: "My-Travel",
    title: "My-Travel",
    imgUrl: images.mytravel,
    description:
      "A travel website is a website that provides travel reviews, trip fares, or a combination of both. ",
    projectLink: "https://yashk786.github.io/mytravel/",
    codeLink: "https://github.com/Yashk786/mytravel",
  },
  {
    name: "food-order",
    title: "Food Order App",
    imgUrl: images.foodOrder,
    description:
      "Its a simple dummy Food-Order app where we got a list of meals form which we can choose and add those meals to the cart, and placed order.",
    projectLink: "https://yashk786.github.io/Food-Order-App/",
    codeLink: "https://github.com/Yashk786/Food-Order-App",
  },
  {
    name: "Expense-Tracker",
    title: "Expense-Tracker",
    imgUrl: images.tracker,
    description:
      "Expense-Tracker is react base application , which use to see our expense over by years",
    projectLink: "https://yashk786.github.io/Expense-Tracker/",
    codeLink: "https://github.com/Yashk786/Expense-Tracker",
  },
  {
    name: "Medium-clone",
    title: "Medium-clone",
    imgUrl: images.medium,
    description:
      "World's Famous Site Medium which inspired me to built this Medium 2.0 Clone with Next JS, Tailwind CSS  for Styling and Firebase for backend.",
    codeLink: "https://github.com/Yashk786/medium-clone",
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        Port<span>folio</span>
      </h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p
                className="p-text"
                style={{ marginTop: 10, textAlign: "center" }}
              >
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="more__link">
        <a href="https://github.com/Yashk786" target="_blank">
          More projects
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "portfolio",
  "app__primarybg"
);
