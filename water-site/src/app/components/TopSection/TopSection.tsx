import React from "react";
import Styles from "./TopSection.module.css";
import Image from "next/image";
import telaviv from "./tel-aviv-skyline.jpg";

const TopSection: React.FC = () => {
  return (
    <div className={`row no-gutters ${Styles.set}`}>
      {/* Image as background */}
      <div
        className={`col-xl-12 ${Styles.background_image}`}
        style={{
          backgroundImage: `url(${telaviv.src})`,
          backgroundSize: "cover",
          height: 604,
          top: 0,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className={`col-xl-6`}></div>
      <div className={`col-xl-6 ${Styles.set_right}`}>
        {/* Header and Paragraph */}
        <div className={`${Styles.header_paragraph_container}`}>
          {/* Header */}
          <span className={`${Styles.header_right}`}>DRINKING WATER</span>

          {/* Paragraph */}
          <div className={`${Styles.set_paragraph}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              dictum sit amet justo vulputate.
            </p>
          </div>
        </div>
        <button type="button" className={`btn btn-primary ${Styles.button} `}>
          Our Services
        </button>
        {/* End of Right */}
      </div>
      {/* Button */}
    </div>
  );
};

export default TopSection;
