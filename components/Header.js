/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Navbar, Container, Row, NavbarBrand, Nav, Button, Col
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Image from "next/image";
import { Images } from "../constant";
import style from "../styles/Header.module.css";
import Offcanvas from 'react-bootstrap/Offcanvas'
const Header = () => {
  return (
    <>
      <div className={style.header_bg}>
        <Container>
          <Row>
            <div className="deskTop">
              <Navbar expand="lg">
                <Navbar.Brand href="#home">
                  <img src={Images.headerLogo} />
                </Navbar.Brand>
                <NavbarToggle />
                <NavbarCollapse
                  id="responsive-navbar-nav"
                  className={style.navbar}
                >
                  <Nav className={style.header_nav}>
                    <Nav.Link
                      href="Home"
                      className={[style.navlink, style.active]}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link href="About" className={style.navlink}>
                      About Us
                    </Nav.Link>
                    <Nav.Link href="Feature" className={style.navlink}>
                      Features
                    </Nav.Link>
                    <Nav.Link href="Pricing" className={style.navlink}>
                      Pricing
                    </Nav.Link>
                    <Nav.Link href="" className={style.navlink}>
                      FAQ
                    </Nav.Link>
                    <Nav.Link href="" className={style.navlink}>
                      Blog
                    </Nav.Link>
                  </Nav>
                  <button className={style.contact_btn}>

                    Contact us
                  </button>
                </NavbarCollapse>
              </Navbar>
            </div>
            <div className="mobileView">
              <Navbar expand={false}>
                <Container fluid>
                  <Navbar.Brand href="#"> <img src={Images.headerLogo} /></Navbar.Brand>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" />
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <Offcanvas.Header closeButton >
                      <Offcanvas.Title id="offcanvasNavbarLabel"><img src={Images.headerLogo} /></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action1">About Us</Nav.Link>
                        <Nav.Link href="#action1">Features</Nav.Link>
                        <Nav.Link href="#action2"> FAQ</Nav.Link>
                        <Nav.Link href="#action2">Pricing</Nav.Link>
                        <Nav.Link href="#action2">Blog</Nav.Link>

                      </Nav>
                      <button className={style.contact_btn}>

                        Contact us
                      </button>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar></div>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Header;