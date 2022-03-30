import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Images } from "../constant";
import style from "../styles/Inquiry.module.css";

const Inquiry = () => {
    return (
        <div>
            <Container>
                <div className={style.Inquiry}>
                    <Row>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <img src={Images.Inquiry} className={style.inquiryImg}/>
                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className={style.inquiryForm}>
                             <div className={style.divForm}>
                             <h5>Send inquiry</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <div className={style.inputForm}>
                                    <input placeholder='Your Name' className={style.inputField} />
                                    <input placeholder='Email' className={style.inputField} />
                                    <input placeholder='Paste your Figma design URL' className={style.inputField} />
                                    <button className={style.buttonField}>Send an Inquiry</button>
                                    <div className={style.PAndImg}>
                                        <p>Get in touch with us </p>
                                        <img src={Images.Arrow} />
                                    </div>
                                </div>
                             </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Inquiry;