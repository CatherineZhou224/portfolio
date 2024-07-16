import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Nav({ currentPage }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <h1>Catherine</h1>
          <h1>Zhou</h1>
        </div>
        <ul className="sidemenu">
          <li className={currentPage === "About" ? "current" : ""}>
            <Link to={"/"}>About</Link>
          </li>
          <li className={currentPage === "Portfolio" ? "current" : ""}>
            <Link to={"/Portfolio"}>Portfolio</Link>
          </li>
          <li>
            <a href="/Jie Zhou_Resume.pdf" target="_blank">
              Resume
            </a>
          </li>
          <li className={currentPage === "Contact" ? "current" : ""}>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
        <Bars3Icon className="icon"></Bars3Icon>
      </div>
    </nav>
  );
}
