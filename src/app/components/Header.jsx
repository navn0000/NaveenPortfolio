'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Styles from '../styleSheets/Header.module.css'
// import { Offcanvas } from "react-bootstrap";
import { AiOutlineMenuUnfold } from 'react-icons/ai';

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (activeTab !== window.location.pathname) {
        setActiveTab(window.location.pathname)
      }
    }
  }, [activeTab])

  return (<div className="container-fluid p-0">
    <nav className={`navbar navbar-sticky navbar-expand-lg ${Styles.header}`}>
      <div className="container-fluid">
        <span onClick={handleShow} className={Styles.navigationIcon}>
          <AiOutlineMenuUnfold />
        </span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${Styles.headerItems}`}>
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === "/" && Styles.active}`} href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === "/skills" && Styles.active}`} href="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === "/projects" && Styles.active}`} href="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeTab === "/blogs" && Styles.active}`} href="/blogs">Blogs</Link>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link ${activeTab === "/experience" && Styles.active}`} href="/experience">Experience</Link>
            </li> */}

            <li className="nav-item">
              <Link className={`nav-link ${activeTab === "/about" && Styles.active}`} href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <Offcanvas show={show} onHide={handleClose} responsive="lg" className={Styles.OffcanvasContainer}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Naveenkumar Ramkumar</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className={`navbar-nav m-0 p-0 ${Styles.headerItems}`}>
          <li className="nav-item">
            <Link className={`nav-link ${activeTab === "/" && Styles.active}`} href="/" onClick={handleClose}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeTab === "/skills" && Styles.active}`} href="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeTab === "/projects" && Styles.active}`} href="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeTab === "/blogs" && Styles.active}`} href="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
              <Link className={`nav-link ${activeTab === "/experience" && Styles.active}`} href="/experience">Experience</Link>
            </li>

          <li className="nav-item">
            <Link className={`nav-link ${activeTab === "/about" && Styles.active}`} href="/about">About</Link>
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas> */}
  </div>)
}