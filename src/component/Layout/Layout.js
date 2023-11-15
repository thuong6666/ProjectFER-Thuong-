import React, { useRef } from "react";
import style from "./layout.module.css";
import NavBar from "../navBar/NavBar";

export default function Layout(props) {
  return (
    <>
      <div className={style.layout}>
        <div>
          <NavBar />
        </div>
        <div className={style.content}>
        <div className={style.titleBar}>
          <h2> {props.name} </h2>
        </div>
         <div>
            {props.children}
         </div>
         </div>
      </div>
    </>
  );
}
