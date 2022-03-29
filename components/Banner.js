import React from 'react';
import {
    Navbar, Container, Row, NavbarBrand, Nav, Button, Col
} from "react-bootstrap";
import { Images } from "../constant";
import style from "../styles/Banner.module.css";
const Banner = () => {
    return (
        <>
            <Container>
                <Row>
                <Col xl={{span: 6 , order: 1}} lg={{span: 6 , order: 1}} md={{span: 6 , order: 1}} sm={{span: 12 , order: 2}} xs={{span: 12 , order: 2}} className={style.BannerFirst}>
                <h1>Building stellar websites for early startups</h1>
                        <div className={style.FirstDiv}>
                            <button className={style.ButtonDiv}>View our work</button>
                            <div className={style.PAndImg}>
                            <p>View Pricing </p>
                            <img src={Images.Arrow} />
                            </div>
                        </div>         
                     </Col>
                     <Col xl={{span: 6 , order: 2}} lg={{span: 6 , order: 2}} md={{span: 6 , order: 2}} sm={{span: 12 , order: 1}} xs={{span: 12 , order: 1}} className={style.BannerSecond}>
                     <img className={style.BannerImg} src={Images.banner} />       
                     </Col>
                </Row>
            </Container>
        </>
    );
}

export default Banner;