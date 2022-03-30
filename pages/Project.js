import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Images } from "../constant";

import style from "../styles/Project.module.css";


const Project = () => {
    return (
        <div>
            <Container>
                <div className={style.ProjectHeading}>
                    <h1>View our projects</h1>
                    <div className={style.PAndImg}>
                        <p>View Pricing </p>
                        <img src={Images.proArrow} />
                    </div>
                </div>
                <div className={style.ProjectContain}>
                    <Row>
                        <Col xl={{ span: 8, order: 1 }} lg={{ span: 8, order: 1 }} md={{ span: 8, order: 1 }} sm={{ span: 8, order: 1 }} xs={{ span: 12, order: 1 }} className={style.ProjectFirst}>
                            <img src={Images.projectImg} className={style.projectImg} />
                            <div className={style.ProjectFirstHover}>
                                <h4>Workhub office Webflow Webflow Design</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                <div className={style.PAndImgHover}>
                                    <p>View Pricing </p>
                                    <img src={Images.Arrow} className={style.hoverarrow} />
                                </div>
                            </div>
                        </Col>
                        <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={{ span: 4, order: 1 }} sm={{ span: 4, order: 1 }} xs={{ span: 12, order: 1 }} className={style.ProjectSecond}>

                            <img src={Images.Portfolio} className={style.Portfolio} />
                            {/* <div className={style.PortfolioHover}>
                                <p>Unisaas Website Design</p>
                                <div className={style.PAndImgHover}>
                                    <p>View Pricing </p>
                                    <img src={Images.Arrow} className={style.hoverarrow} />
                                </div>
                            </div> */}

                            <img src={Images.Portfolio2} className={style.Portfolio2} />
                        </Col>

                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Project;
