import style from "../styles/body.module.css";
import Link from "next/link";
import icon from "../assets/visualize.svg";

export default function Body() {
  return (
    <div className={style.body}>
      <div className={style.big}>
        <div className={style.flex}>
          <span
            style={{
              padding: "20px 10px",
            }}
            className={style.flex}
          >
            <img src={icon.src} alt="icon" className={style.imagest} />
          </span>{" "}
          <span>izualize</span>
        </div>
      </div>

      <Link href="/visualizer">
        <button>Start</button>
      </Link>
    </div>
  );
}
