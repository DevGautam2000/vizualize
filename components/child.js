import React from "react";
import Context from "../context/context";
import style from "../styles/child.module.css";

export default function Child() {
  const {
    childDimensions,
    c_position,
    cBackground,
    c_display: { display, alignItems, justifyContent },
  } = React.useContext(Context);

  React.useEffect(() => {
    const effect = () => {
      const { height, width } = childDimensions;
      var root = document.querySelector(":root");
      root.style.setProperty("--c-height", height);
      root.style.setProperty("--c-width", width);
      root.style.setProperty("--c-position", c_position);
      root.style.setProperty("--c-display", display);
      root.style.setProperty("--c-align-items", alignItems);
      root.style.setProperty("--c-justify-content", justifyContent);
      root.style.setProperty("--c-background", cBackground);
      root.style.setProperty(
        "--c-tooltip-padding",
        c_position === "static" ? 0 : "6px 8px"
      );
    };

    return effect();
  }, [childDimensions, c_position, cBackground]);

  return (
    <div
      className={style.child}
      data-name={c_position === "static" ? "" : "child"}
    ></div>
  );
}
