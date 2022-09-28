import React from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';

const Faqs = () => {
  return (
    <div className="container p-3">
      <div className="text-center mt-3 pt-5 display-5 fw-bold">
        FAQ
        <h5
          className="text-muted pt-2"
          style={{ fontWeight: '300', fontSize: '21px' }}
        >
          Most frequent questions and answers
        </h5>
      </div>
      <Row className="m-2 p-3">
        <Col>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0" className="my-5 pb-3">
              <Accordion.Header>
                <b>IS INSURANCE REQUIRED FOR SHIPMENTS?</b>
              </Accordion.Header>
              <Accordion.Body className="m-2 p-4">
                While insurance is not required, shippers should carefully
                evaluate their potential exposure to loss. All carriers limit
                their liability under the terms of carriage. In general,
                trucking companies and customs brokers limit their liability to
                $50 per shipment, ocean carriers to $500 per shipment, and air
                carriers to $20 per kilo. The low cost of insurance should be
                considered and requested in writing from your broker or
                forwarder.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="my-5 py-3">
              <Accordion.Header>
                <b>IS A BOND REQUIRED FOR ALL IMPORT SHIPMENTS?</b>
              </Accordion.Header>
              <Accordion.Body className="m-2 p-4">
                In general, only shipments valued at over $2500 USD require an
                entry bond. CBP can always require a formal entry with bond
                regardless of the value of the shipment. Certain merchandise may
                be subject to other government agencies; for example, food item
                and drugs require a bond for three times the value of the
                shipment. Please note if your commercial shipment is arriving
                via ocean and is valued at over $2500, you will be required to
                post a separate bond for your ISF- Importers Security Filing.
                The alternative is to file a continuous bond which will cover
                all of your shipments for a one year period.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="my-5 py-3">
              <Accordion.Header>
                <b>WHAT IS THE PURPOSE OF AN ORIGINAL BILL OF LADING?</b>
              </Accordion.Header>
              <Accordion.Body className="m-2 p-4">
                The steamship line will issue three original bills of lading and
                multiple non-negotiable copies after the shipment has been
                confirmed on board the exporting vessel. At least one original
                bill must be signed on the back by the importer or their agent
                and surrendered back to the steamship line in order for the
                consignee to gain release of the shipment at the destination.
                The retention of the original bills by the shipper allows the
                shipper to receive payment as agreed prior to release of the
                originals to the consignee/buyer. Many importers either prepay
                or have credit terms with their suppliers so shipments are
                released on express bills, basically a paperless system. The use
                of express bills reduces costs for couriers and expedites the
                final delivery of the shipment.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0" className="my-5 pb-3">
              <Accordion.Header>
                <b>WHAT DOCUMENTS ARE REQUIRED FOR IMPORT SHIPMENTS?</b>
              </Accordion.Header>
              <Accordion.Body className="m-2 p-4">
                The very basic documents required are:
                <ul>
                  <li>Commercial invoice</li>
                  <li>Packing list</li>
                  <li>Copy of the airway bill or ocean bill of lading.</li>
                </ul>
                The commercial invoice must be detailed to indicate the
                sellers/buyers name and address, description of merchandise,
                incoterm, value and country of origin. Certain types of
                merchandise require special invoices or additional invoice
                detail such as footwear, wearing apparel, bearings and others.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="my-5 py-3">
              <Accordion.Header>
                <b>WHAT ARE TERMS OF SALE?</b>
              </Accordion.Header>
              <Accordion.Body className="m-2 p-4">
                The terms of sale or incoterms are very important to include on
                your purchase order. The terms define what is included in the
                agreed upon price for the merchandise. As an example if you
                agree to FOB terms based on the price offered, the seller, at
                the sellers expense will be responsible to get the merchandise
                to the nearest port or airport of export. The buyer/importer
                will be responsible for all international transportation
                charges, clearance, duties and delivery to final destination.
                Always make sure to have your supplier indicate the term of sale
                on the invoice when purchasing on a C&F or CIF basis. The
                supplier must break out the actual cost of the international air
                or ocean freight and insurance on the invoice so that those
                amounts can be properly verified.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="my-5 py-3">
              <Accordion.Header>
                <b>SHOULD I SHIP VIA AIR OR OCEAN?</b>
              </Accordion.Header>
              <Accordion.Body className="m-2 p-4">
                This question comes up when importers purchase items on the
                internet, especially smaller shipments. Generally if your
                shipment weighs under 150 kilos and does not have a large cubic
                volume, it will likely be less expensive to ship by air than as
                ocean freight. That’s because, with ocean freight shipments you
                have a minimum bill of lading charge, ISF filing requirement,
                warehouse devanning, documentation charges and forklift charges.
                If your shipment is designated for a government examination that
                will also be much more expensive on ocean shipments in most
                ports. To reduce landed cost per piece of merchandise importers
                must purchase enough items to fill 40 ft container loads. The
                value of the merchandise and transit time must also be
                considered while deciding to ship via air or ocean. Very high
                priced electronics will almost always ship via air freight.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};
export default Faqs;
