import React from "react";
import Context from "../context/context";
import style from "../styles/parent.module.css";
import Child from "./child";

export default function Parent() {
  const {
    dimensions,
    p_position,
    pBackground,
    p_display: { display, alignItems, justifyContent },
  } = React.useContext(Context);

  React.useEffect(() => {
    const effect = () => {
      const { height, width } = dimensions;
      var root = document.querySelector(":root");
      root.style.setProperty("--p-height", height);
      root.style.setProperty("--p-width", width);
      root.style.setProperty("--p-position", p_position);
      root.style.setProperty("--p-display", display);
      root.style.setProperty("--p-align-items", alignItems);
      root.style.setProperty("--p-justify-content", justifyContent);
      root.style.setProperty("--p-padding", 0);
      root.style.setProperty("--p-background", pBackground);
      root.style.setProperty("--p-justify-content", justifyContent);
      root.style.setProperty(
        "--p-tooltip-padding",
        p_position === "static" ? 0 : "6px 8px"
      );
    };

    return effect();
  }, [dimensions, p_position, pBackground]);
  return (
    <div
      className={style.parent}
      data-name={p_position === "static" ? "" : "parent"}
    >
      <Child />
    </div>
  );
}
