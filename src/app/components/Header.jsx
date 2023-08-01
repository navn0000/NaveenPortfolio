import Link from "next/link";

export default function Header(){
    return(<div className="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" href="/">Home</Link>

        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/skills">Skills</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" href="/experience">Experience</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/resume">Resume</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>)
}