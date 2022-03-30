import React from 'react';
import {
    Navbar, Container, Row, NavbarBrand, Nav, Button, Col
} from "react-bootstrap";
import { Images } from "../constant";
import style from "../styles/Work.module.css";
const Work = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 4, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} className={style.BannerFirst}>
                        <div className={style.WorkDetails}>
                            <h1>How we work</h1>
                            <div className={style.workDiscription}>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div className={style.PAndImg}>
                                <p className={style.withUs}>Get in touch with us </p>
                                <img src={Images.Arrow2} />
                            </div>
                        </div>
                    </Col>
                    <Col xl={{ span: 8, order: 2 }} lg={{ span: 8, order: 2 }} md={{ span: 8, order: 2 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }} className={style.BannerSecond}>
                       <Row>
                       <Col xl={6} lg={6} md={6} sm={6} xs={12} className={style.cardWork}>
                            <div className={style.Card}>
                                <img src={Images.work1} />
                                <h2>Strategy</h2>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} xs={12} className={style.cardWork}>
                            <div className={style.Card}>
                                <img src={Images.work2} />
                                <h2>Wireframing</h2>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} xs={12} className={style.cardWork}>
                            <div className={style.Card}>
                                <img src={Images.work3} />
                                <h2>Design</h2>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} xs={12} className={style.cardWork}>
                            <div className={style.Card}>
                                <img src={Images.work4} />
                                <h2>Development</h2>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </Col>
                       
                       
                       </Row>
                        

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Work;