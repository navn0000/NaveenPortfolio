import Link from "next/link";
import Styles from '../styleSheets/Header.module.css'

export default function Header(){
    return(<div className="container-fluid p-0">
    <nav className={`navbar navbar-sticky navbar-expand-lg ${Styles.header}`}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${Styles.headerItems}`}>
        <li className="nav-item">
          <Link className={`nav-link ${Styles.active}`} href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/skills">Skills</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="/experience">Experience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>)
}