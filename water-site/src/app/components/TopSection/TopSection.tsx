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
      {/* Left */}
      <div className={`col-xl-6`}></div>

      {/* Right */}
      <div className={`col-xl-6 ${Styles.set_right}`}>
        {/* Header */}
        <span className={`${Styles.header_right}`}>DRINKING WATER</span>

        {/* Paragraph */}
        <div className={`${Styles.set_paragraph}`}>
          <p>
            we understand the criticality of safe and adequate water supplies,
            proper treatment, and reliable infrastructure for a sustainable
            future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;

{
  /* <Image
className="col-xl-12"
src={telaviv}
style={{
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "centercenter",
  zIndex: "20",
}}
alt={""}
height={580}
/> */
}
