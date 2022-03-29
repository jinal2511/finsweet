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

const Header = () => {
  return (
    <>
      <div className={style.header_bg}>
          <Container>
            <Row>
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
            </Row>
          </Container>
        </div>
    </>
  );
};
export default Header;