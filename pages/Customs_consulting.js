import React from 'react';
import ImageInner from '../components/ImageInner';

const Customs_consulting = ({ src, alt, width, height }) => {
  src = '/images/export.jpeg';
  alt = 'Picture of the author';
  width = '1900px';
  height = '500px';

  return (
    <>
      <ImageInner src={src} alt={alt} width={width} height={height} />
      <div className="text-justify container p-4">
        <div className="text-center m-5 display-6 fw-bold">
          Customs brokerage experience
        </div>
        <div className=" px-4 mx-4">
          Looking to import into the United States? Need an assessment of your
          current importing needs? Bee Honey can help with customs consulting.
          <p>
            Bee Honey has a team of qualified U.S. Customs Consultants ready
            take on any project you can throw at them.
          </p>
        </div>
        <div className=" px-5 mx-4">
          <b>We handle:</b>
          <ul>
            <li>Trade agreements</li>
            <li>Compliance audits</li>
            <li>Document preparation</li>
            <li>Tax requirements and exemptions</li>
            <li>Other governmental requirements</li>
            <li>Tariff treatments</li>
            <li>Valuation for duty</li>
            <li>Special assessments</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Customs_consulting;
