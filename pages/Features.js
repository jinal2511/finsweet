import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Images } from "../constant";
import style from "../styles/Features.module.css";
const Features = () => {
    return (
        <div>
            <Container>
                <div className={style.featuresMain}>

                    <h1>Features</h1>
                    <h2>Design that solves problems, one product at a time</h2>
                </div>
                <Row>
                    <Col xl={{ span: 4, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>

                        <div className={style.cardView}>
                            <img src={Images.user} />
                            <h6>Uses Client First</h6>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col xl={{ span: 4, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <div className={style.cardView}>
                            <img src={Images.tik} />
                            <h6>Two Free Revision Round</h6>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col xl={{ span: 4, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <div className={style.cardView}>
                            <img src={Images.pen} />
                            <h6>Template Customization</h6>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col xl={{ span: 4, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <div className={style.cardView}>
                            <img src={Images.que} />
                            <h6>24/7 Support</h6>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col xl={{ span: 4, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <div className={style.cardView}>
                            <img src={Images.timer} />
                            <h6>Quick Delivery</h6>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col xl={{ span: 4, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <div className={style.cardView}>
                            <img src={Images.note} />
                            <h6>Hands-on approach</h6>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Features;