import React, { Component } from "react";
import myPhoto from "../../assets/images/mesurements_1.jpg";
import img2 from "../../assets/images/mesurements_2.png";

export default class FullStackImg extends Component {
  render() {
    return (
      <div style={{ width: "50%" }}>
        <div style={{ display: "flex", width: "100%", gap: "8px" }}>
          <img
            src={myPhoto}
            alt="Data Science"
            style={{ width: "100%", height: "auto", objectFit: "cover", flex: 1 }}
          />
          <img
            src={img2}
            alt="Second"
            style={{ width: "100%", height: "auto", objectFit: "cover", flex: 1 }}
          />
        </div>
      </div>
    );
  }
}
