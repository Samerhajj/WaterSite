import React from "react";
import Styles from "./Welcome.module.css";
import HeaderWithBlueLine from "../StyleComponents/HeaderWithBlueLine";

interface Data {
  title: string;
}
const Welcome: React.FC<Data> = ({ title }) => {
  return (
    <section className={Styles["top-section"]}>
      <div className={`${Styles.handle_template}`}>
        {/* Wrapper */}
        <div id="Hello" className={Styles["section-heading-container"]}>
          {/* Header */}
          <HeaderWithBlueLine title={title} />
          {/* section-paragraph */}
          <p className={Styles["section-paragraph"]}>
            ipsum ipsum incididunt dolor eiusmod amet ipsum sed eiusmod sit
            adipiscing sit sed adipiscing adipiscing ipsum sed tempor sed ipsum
            consectetur do dolor eiusmod Lorem dolor tempor sed consectetur elit
            tempor incididunt sed elit incididunt do Lorem eiusmod eiusmod dolor
            incididunt eiusmod dolor ipsum tempor consectetur adipiscing ipsum
            sit amet consectetur incididunt dolor eiusmod tempor dolor dolor sit
            consectetur do ipsum amet adipiscing sit consectetur consectetur sed
            do sed elit sed dolor tempor sed
          </p>
          <p>
            Lorem elit amet do consectetur consectetur ipsum incididunt
            consectetur sed amet eiusmod dolor amet adipiscing ipsum sed
            adipiscing tempor ipsum elit consectetur sed sit dolor eiusmod
            adipiscing tempor do tempor incididunt Lorem sed elit incididunt
            adipiscing elit sed consectetur Lorem adipiscing consectetur amet
            Lorem sit amet dolor do Lorem ipsum incididunt consectetur
            incididunt adipiscing sed sed consectetur adipiscing amet ipsum
            dolor adipiscing Lorem tempor do sed eiusmod do
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
