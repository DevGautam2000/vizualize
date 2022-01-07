import style from "../styles/navbar.module.css";
import Link from "next/link";
import icon from "../assets/visualize.svg";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={`${style.appname}`}>
        <span className={style.flex}>
          <img src={icon.src} alt="icon" className={style.imagest} />
        </span>
        <span
          style={{
            position: "relative",
            left: "-5px",
            top: "2px",
          }}
        >
          izualize
        </span>
      </div>
      <div>
        <ul>
          <Link href="https://github.com/devgautam2000">
            <li>Source</li>
          </Link>
          <Link href="https://github.com/devgautam2000">
            <li>Developer</li>
          </Link>

          <li>Gautam Chandra Saha</li>
        </ul>
      </div>
    </div>
  );
}
