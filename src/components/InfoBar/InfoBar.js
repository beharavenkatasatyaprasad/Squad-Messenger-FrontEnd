import React from "react";
import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h4>{room}</h4>
    </div>
    <div className="rightInnerContainer">
      <a href="/" className="close" alt="close">
        <i class="fa fa-sign-out" aria-hidden="true"></i>
      </a>
    </div>
  </div>
);

export default InfoBar;
