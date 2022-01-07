import React from "react";
import Context from "../context/context";
import style from "../styles/parent.module.css";
import Child from "./child";

export default function Parent() {
  const {
    dimensions,
    p_position,
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
    };

    return effect();
  }, [dimensions, p_position]);
  return (
    <div className={style.parent} data-name="parent">
      <Child />
    </div>
  );
}
