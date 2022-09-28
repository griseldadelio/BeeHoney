import React from 'react';
import Image from 'next';
import style from '../styles/web.module.css';

const Isf_filing = () => {
  return (
    <>
      <div className="mt-3"></div>
      <div className="text-justify container p-4">
        <div className="text-center m-5 display-6 fw-bold">
          What to know…
          <div className="container">
            <Image
              src="https://clearitusa.com/wp-content/uploads/2019/09/ISF-graphic-2.png"
              width="100%"
              alt="isf filing"
            ></Image>
          </div>
        </div>
        <div className="container p-5">
          <b>What is Importer Security Filing (ISF)?</b>
          <div className="py-2">
            <a
              href="https://www.freightos.com/freight-resources/isf-filing-fee/"
              Target="_blank"
              className={style.text_filing}
            >
              Importer Security Filing&nbsp;
            </a>
            is a mandatory Customs Border Protection regulation which requires
            all importers receiving cargo by ocean vessel to provide advanced
            shipment information to CBP prior to leaving port.
          </div>
          <b>Who files my ISF and when?</b>
          <div className="py-2">
            Your Customs Broker will file ISF on your behalf at least 24 hours
            prior to cargo leaving its port of origin.
          </div>
          <b>What happens if ISF is not performed?</b>
          <div className="py-2">
            Failure to file your ISF can lead to stiff penalties, increased
            cargo inspection, and an overall delay in receiving your cargo.
            Penalties range from $5,000 USD – $100,000 USD
          </div>
          <b>What Information is required to file an ISF?</b>
          <div className="py-2">
            ISF requires 10 separate data elements. They are listed as follows:
            <div className="p-2">
              <ul>
                <li className="py-2">
                  <b>Supplier (or manufacturer) name & address</b>– the company
                  or person that manufactured the goods or the last
                  company/person that modified it
                </li>
                <li className="py-2">
                  <b>Vendor name & address</b>– The company/person which
                  purchased the goods.
                </li>
                <li className="py-2">
                  <b>Buyer (importer of record) name & address</b> – The person
                  or company purchasing the goods.
                </li>
                <li className="py-2">
                  <b>Ship-to name & address</b>– the physical location / final
                  destination of the goods.
                </li>
                <li className="py-2">
                  <b>Container stuffing location</b>– The name and address of
                  the location where the goods were placed into the container.
                  If placed into the container in more than one location, all
                  locations must be listed.
                </li>
                <li className="py-2">
                  <b>Consolidator name & address </b>– the party who physically
                  stuffed the container or arranged for it. If the vendor or
                  manufacturer of the goods stuffed the container, then they
                  would be considered the consolidator.
                </li>
                <li className="py-2">
                  <b>ISF importer (importer assigned) number</b>– The IRS
                  number, employee identification number, social security
                  number, or CBP assigned number of the party responsible for
                  the goods entering the United States. This may or may not be
                  the importer of record; it can be the owner, consignee, or
                  agent.
                </li>
                <li className="py-2">
                  <b>Consignee identification number</b>– The IRS number,
                  employee identification number, social security number, or CBP
                  assigned number of the U.S consignee. This party must be
                  located in the United States.
                </li>
                <li className="py-2">
                  <b>Country of origin</b>– The country where the goods were
                  produced or grown.
                </li>
                <li className="py-2">
                  <b>HTS codes</b>– Harmonized Tarif Schedule numbers with a
                  minimum of 6 digits.
                </li>
                <li className="pt-2">
                  <b>Bill of lading number</b>– Either the house or straight
                  bill of lading number, whichever is lowest.
                </li>
              </ul>
            </div>
          </div>
          <b>How do I submit my ISF filing to Clearit USA?</b>
          <div className="py-2">
            ISF filing data is uploaded along with your commercial invoice when
            submitting a request for clearance.
          </div>
        </div>
      </div>
      <h4 className="text-center p-3 fw-bold">
        Let our experienced staff seamlessly handle your ISF filing.
      </h4>
    </>
  );
};
export default Isf_filing;
