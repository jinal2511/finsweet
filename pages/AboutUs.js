import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Images } from "../constant";
import style from "../styles/AboutUs.module.css";

const AboutUs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 4, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} className={style.aboutUsFirst}>
                        <h3>What our clients say about us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </Col>
                    <Col xl={{ span: 8, order: 1 }} lg={{ span: 8, order: 1 }} md={{ span: 8, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} className={style.aboutUsSecond}>
                        <h5>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</h5>
                        <div className={style.aboutUsDiv}>
                            <div className={style.divImgDetails}>
                                <img src={Images.AboutUs} />
                                <div className={style.divDetails}>
                                    <label>Jenny Wilson</label>
                                    <p>Vice President</p>
                                </div>
                            </div>
                            <div className={style.arrowImg}>
                                <img src={Images.leftArrow} className={style.leftArrow} />
                                <img src={Images.rightArrow} className={style.rightArrow} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;