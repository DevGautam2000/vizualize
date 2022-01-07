import React from "react";
import style from "../styles/visualizer.module.css";
import Head from "next/head";
import Canvas from "../components/Canvas";
import Operator from "../components/Operator";
export default function Visualizer() {
  return (
    <>
      <Head>
        <title>Vizualize</title>{" "}
      </Head>
      <div className={style.visualizer}>
        <Canvas />
        <Operator />
      </div>
      ;
    </>
  );
}
