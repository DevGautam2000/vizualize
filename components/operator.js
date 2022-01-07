import React, { useState } from "react";
import style from "../styles/operator.module.css";
import Context from "../context/context";

export default function Operator() {
  const {
    dimensions,
    setdimensions,
    childDimensions,
    setChildDimensions,
    setp_position,
    setc_position,
  } = React.useContext(Context);

  const [pheight, setpheight] = useState("200");
  const [pwidth, setpwidth] = useState("200");
  const [cheight, setcheight] = useState("100");
  const [cwidth, setcwidth] = useState("100");

  return (
    <div className={style.operator}>
      <section>
        <header>parent</header>

        <main>
          <div>
            <span>height</span>
            <span>width</span>
            <span>position</span>
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="800"
              step="1"
              value={pheight}
              onChange={(e) => {
                setdimensions(() => ({
                  ...dimensions,
                  height: `${e.target.value}px`,
                }));

                setpheight(() => e.target.value);
              }}
            />

            <input
              type="range"
              min="0"
              max="800"
              step="1"
              value={pwidth}
              onChange={(e) => {
                setdimensions(() => ({
                  ...dimensions,
                  width: `${e.target.value}px`,
                }));
                setpwidth(() => e.target.value);
              }}
            />

            <select
              onChange={(e) => {
                setp_position(() => e.target.value);
              }}
            >
              <option value="relative">relative</option>
              <option value="absolute">absolute</option>
              <option value="fixed">fixed</option>
              <option value="sticky">sticky</option>
            </select>
          </div>
        </main>
      </section>

      <section>
        <header>child</header>

        <main>
          <div>
            <span>height</span>
            <span>width</span>
            <span>position</span>
          </div>

          <div>
            <input
              type="range"
              min="0"
              max="800"
              step="1"
              value={cheight}
              onChange={(e) => {
                setChildDimensions(() => ({
                  ...childDimensions,
                  height: `${e.target.value}px`,
                }));

                setcheight(() => e.target.value);
              }}
            />
            <input
              type="range"
              min="0"
              max="800"
              step="1"
              value={cwidth}
              onChange={(e) => {
                setChildDimensions(() => ({
                  ...childDimensions,
                  width: `${e.target.value}px`,
                }));
                setcwidth(() => e.target.value);
              }}
            />

            <select
              onChange={(e) => {
                setc_position(() => e.target.value);
              }}
            >
              <option value="relative">relative</option>
              <option value="absolute">absolute</option>
              <option value="fixed">fixed</option>
              <option value="sticky">sticky</option>
            </select>
          </div>
        </main>
      </section>
    </div>
  );
}
