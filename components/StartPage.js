import React from 'react';
import style from '../styles/web.module.css';
import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';

export const StartPage = () => {
  return (
    <>
      <div className="text-center mt-5 mb-4 display-6 fw-bold">
        OUR EXPERTISE
      </div>
      <hr className={style.title_divider} />
      <Row className="m-5">
        <Col>
          <ul>
            <li>Commercial Goods</li>
            <li>Household Goods and Personal Effects</li>
            <li>Wearing Apparel</li>
            <li>Electronics</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Door to Door Freight Arrangements (Air & Ocean)</li>
            <li>Domestic Trucking</li>
            <li>Cargo Insurance</li>
            <li>Customs Bonds</li>
          </ul>
        </Col>
      </Row>
      <br />
      <Container>
        <Row>
          <Col className={style.bg_image} />
          <Col className="p-4 container" sm={6}>
            <Row className="m-4">
              <Col className="p-2">
                <Row>
                  <Col className="text-center pb-2" sm={4}>
                    <Image
                      src="/images/turn.png"
                      alt="turn"
                      width="100"
                      height="100"
                    ></Image>
                  </Col>
                  <Col sm={8}>
                    <h4>REQUEST A QUOTE </h4>
                    Want information about a specific shipment? Fill out our
                    "Request a Quote" questionnaire and one of our team members
                    will get back o you. For general questions, fill out the
                    "Quick Contact" form.
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Row className="m-4">
              <Col className="p-2">
                <Row>
                  <Col sm={8}>
                    <h4>MISSION STATEMENT</h4>
                    We are committed to providing a simple and high quality
                    importing experience to our clients. We are able to provide
                    impeccable service because of our team of seasoned
                    professionals
                  </Col>
                  <Col className="text-center" sm={4}>
                    <Image
                      src="/images/hands.png"
                      alt="hands"
                      width="100"
                      height="100"
                    ></Image>
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Row className="m-4">
              <Col className="p-2">
                <Row>
                  <Col className="text-center pb-2" sm={4}>
                    <Image
                      src="/images/news.png"
                      alt="news"
                      width="100"
                      height="100"
                    ></Image>
                  </Col>
                  <Col sm={8}>
                    <h4>THE LATEST NEWS... </h4>
                    Due to an ever changing industry, we have posted the latest
                    news from Customs. In addition, we have insightful
                    information for importers and exporters, including some of
                    the challenges they may face.
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
