import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Service.scss";
import { images } from "../../constants";

const services = [
  {
    title: "Cross browser development",
    description:
      "Developed websites that are compatible with different browsers and devices.",
    imgUrl: images.crossDevelopment,
  },
  {
    title: "Web Development",
    description:
      "Develop an interactive website based on your design and create a modern user interface.",
    imgUrl: images.web,
  },
  {
    title: "Frontend Architecture ",
    description:
      "Use different tools and processes that improve the quality of code while creating a more efficient and sustainable workflow..",
    imgUrl: images.frontEnd,
  },
  {
    title: "App maintenance and data migration",
    description:
      "Analyzing and tracking of data quality so that data integrity can be better understood.",
    imgUrl: images.maintenance,
  },
];

const Service = () => {
  return (
    <>
      <h2 className="head-text">
       What I<span> Do</span>      </h2>

      <div className="app__profiles">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={service.title + index}
          >
            <img src={service.imgUrl} alt={service.title} />
            <h2
              className="bold-text"
              style={{
                marginTop: 20,
                display: "flex",
                justifySelf: "center",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              {service.title}
            </h2>
            <p
              className="p-text"
              style={{ marginTop: 10, textAlign: "center" }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Service, "app__about"),
  "features",
  "app__whitebg"
);
