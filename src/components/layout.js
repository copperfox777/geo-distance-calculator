import React from "react";
import Navbar from "./navbar";
import "../styles/styles.css";

export default function Layout({ children, title }) {
  return (
    <div>
    <Navbar/>

      <div className="flex-cont">
        <div className="flex-box">{children}</div>
      </div>
    </div>
  );
}
