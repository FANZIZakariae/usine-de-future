import React, { Component } from "react";
import myPhoto from "../../assets/images/manif_1.png";
import img2 from "../../assets/images/manif_2.jpg";
import img3 from "../../assets/images/manif_3.jpg";
import img4 from "../../assets/images/manif_4.jpg";

export default class DataScienceImg extends Component {
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
        <div style={{ display: "flex", width: "100%", gap: "8px" }}>
          <img
            src={img3}
            alt="Third"
            style={{ width: "100%", height: "auto", objectFit: "cover", flex: 1 }}
          />
          <img
            src={img4}
            alt="Fourth"
            style={{ width: "100%", height: "auto", objectFit: "cover", flex: 1 }}
          />
        </div>
      </div>
    );
  }
}
