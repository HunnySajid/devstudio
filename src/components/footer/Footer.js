import React, {useContext} from "react";
import "./Footer.css";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Hunain Bin Sajid")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          +923218084122
        </p>
      </div>
    </Fade>
  );
}
