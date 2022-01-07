import style from "../styles/canvas.module.css";
import Parent from "./parent";

export default function Canvas() {
  return (
    <div className={style.canvas}>
      <Parent />
    </div>
  );
}
