import React from "react";
import Styles from "./HeaderWithBlueLine.module.css";

interface Data {
  title: string;
}

const HeaderWithBlueLine: React.FC<Data> = ({ title }) => {
  return (
    <div className={Styles["section-heading-header"]}>
      <h2
        className={`${Styles["section-heading"]} ${Styles["section-heading-h2"]}`}
      >
        {title}
        <div
          className={`${Styles["custom-flex"]} ${Styles["custom-space-y-2"]} ${Styles["custom-border-l-4"]} ${Styles["custom-py-2"]} ${Styles["custom-pl-4"]} ${Styles["custom-md-border-l-0"]} ${Styles["custom-md-border-t-2"]} ${Styles["custom-md-pb-0"]} ${Styles["custom-md-pl-0"]} ${Styles["custom-md-pt-4"]}`}
        ></div>
      </h2>
    </div>
  );
};

export default HeaderWithBlueLine;
