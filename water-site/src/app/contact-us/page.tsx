import React from "react";
import Styles from "./contact.module.css";
import Image from "next/image";
import rain from "./rain.jpg";
import raa from "./raa.jpg";
import HeaderWithBlueLine from "../components/StyleComponents/HeaderWithBlueLine";
const ContactUs = () => {
  return (
    <>
      <div className={`${Styles.setbox}`}>
        <Image className={`${Styles["setbox-image"]}`} src={raa} alt="" />
        <div className={`${Styles["setbox-inner"]}`}>
          <div className={`${Styles["container-inner"]}`}>
            <h1 className={`${Styles["setbox-title"]}`}>Contact US</h1>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div
          className={` d-flex justify-content-center mt-4 ${Styles.container}`}
        >
          <div className={`vc_row vc_row-flex ${Styles.vc_row_vc_row_flex}`}>
            <HeaderWithBlueLine title="Tel-Aviv" />
            <Image src={raa} alt="" width={325} height={325} />
            <h4>Tel Aviv 239</h4>
            <p>
              <b>Address</b>
              <br />
              9328923 V State Israel str, ID 9327
            </p>
            <p>
              <br />
              <b>Phone: </b>
              +381241839
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
