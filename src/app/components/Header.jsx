'use client'
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Styles from '../styleSheets/Header.module.css'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { AiOutlineMenuUnfold } from 'react-icons/ai';

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  const pathname = usePathname();


  const NavigationRoutes = [
    {Name: "Home", route: "/"},
    {Name: "Skills", route: "/skills"},
    {Name: "Blogs", route: "/blogs"},
    {Name: "Projects", route: "/projects"},
    {Name: "About", route: "/about"},
];
  return (<div className="container-fluid p-0">
    <nav className={`navbar navbar-sticky navbar-expand-lg ${Styles.header}`}>
      <div className="container-fluid">
        <span onClick={handleShow} className={Styles.navigationIcon}>
          <AiOutlineMenuUnfold />
        </span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${Styles.headerItems}`}>
            {
              NavigationRoutes?.map((routes)=>{
                const isActive = pathname === routes.route
                return <li className="nav-item">
                  <Link className={`nav-link ${isActive && Styles.active}`}
                    href={routes?.route}
                   >
                    {routes.Name}
                  </Link>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </nav>
    <Offcanvas show={show} onHide={handleClose} responsive="lg" className={Styles.OffcanvasContainer}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className={`navbar-nav m-0 p-0 ${Styles.headerItems}`}>
        {
              NavigationRoutes?.map((routes)=>{
                const isActive = pathname === routes.route
                return <li className="nav-item">
                  <Link className={`nav-link ${isActive && Styles.active}`}
                    href={routes?.route} onClick={handleClose}
                   >
                    {routes.Name}
                  </Link>
                </li>
              })
            }
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  </div>)
}

