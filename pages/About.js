import React from 'react';
import ImageInner from '../components/ImageInner';
import { Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const About = ({ src, alt, width, height }) => {
  src = '/images/truck.jpg';
  alt = 'Picture of the author';
  width = '1450px';
  height = '500px';

  return (
    <>
      <ImageInner src={src} alt={alt} width={width} height={height} />
      <div className="text-justify container p-4">
        <div className="text-center m-3 display-6 fw-bold">
          About U.S. Customhouse Brokers
        </div>
        <p>
          As a leading provider of U.S. customs brokerage ,we can help you
          manage imports and exports, by ocean, air or ground, with
          comprehensive customs support in the U.S. , we are able to offer the
          experience of a strong working relationship and expertise with U.S.
          Customs and Border Protection as well as with various Participating
          Government Agencies, including the Food & Drug Administration (FDA),
          U.S. Department of Agriculture (USDA) and Other Government
          Agencies(OGA).
        </p>

        <p>
          Led by a solid team of licensed customs brokers, we provide expertise
          and a comprehensive customs brokerage and compliance services. Our
          expertise in the North American Free Trade Agreement (NAFTA) or the
          formally signed USMCA characterized as NAFTA 2.0, preparing Domestic
          entries, reconciliation, protest post summary corrections, consulting
          on valuation, and delivering classifications, to name just a few of
          our services, helps our clients avoid shipment delays and minimizes
          excessive and unnecessary costs.
        </p>
      </div>

      <div className="text-justify container mt-5 p-5">
        <Row>
          <Col>
            <Row sm={6}>
              <Col className="text-end">
                <Icon.People size="30px" color="#e5b034" />
              </Col>
              <Col sm={8} className="mb-3">
                <h3>Communication is our priority</h3>
              </Col>
            </Row>
            <Row>
              <div className="container">
                Communication is paramount not only to Bee Honey, but to Customs
                Brokerage and logistics as a whole. That’s why we offer
                multi-channel communication, keeping you and the rest of your
                supply chain up to date every step of the way.
              </div>
            </Row>
          </Col>
          <Col>
            <Row sm={6}>
              <Col className="text-end">
                <Icon.ClockHistory size="30px" color="#e5b034" />
              </Col>
              <Col sm={8} className="mb-3">
                <h3>Quick & Compliant</h3>
              </Col>
            </Row>
            <Row>
              <div className="container">
                Bee Honey prides itself on the ability to act quickly &
                efficiently while maintaining compliance. Using our proprietary
                software and “swarm” approach, we can ensure no detail is
                overlooked and offer the quickest turnaround time in the
                industry, guaranteed.
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default About;
