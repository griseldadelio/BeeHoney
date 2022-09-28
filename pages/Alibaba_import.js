import React from 'react';
import ImageInner from '../components/ImageInner';

const Alibaba_import = ({ src, alt, width, height }) => {
  src = '/images/sheap.jpeg';
  alt = 'Picture of the author';
  width = '1450px';
  height = '500px';

  return (
    <>
      <ImageInner src={src} alt={alt} width={width} height={height} />
      <div className="text-justify container p-4">
        <div className="text-center m-5 display-6 fw-bold">
          Alibaba Imports USA
        </div>
        <p>
          As a leading provider of U.S. customs brokerage , we can help you
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
    </>
  );
};
export default Alibaba_import;
