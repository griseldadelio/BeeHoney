import React from 'react';
import ImageInner from '../components/ImageInner';
import { Button } from 'react-bootstrap';

const Alibaba_import = ({ src, alt, width, height }) => {
  src = '/images/insurance.jpg';
  alt = 'Picture of the author';
  width = '1600px';
  height = '400px';

  return (
    <>
      <ImageInner src={src} alt={alt} width={width} height={height} />
      <div className="text-justify container p-4">
        <div className="text-center m-5 display-6 fw-bold">
          Sometimes, standard shipping insurance just isn’t enough.
        </div>
        <div className="px-5 mx-5">
          <p>
            Cargo insurance provides protection against all risks of physical
            loss or damage to freight from any external cause during shipping,
            whether by land, sea or air.
          </p>
          <p>
            Most freight bookings include minimal coverage of just $2.00 per
            pound.
          </p>
          <p>
            Get complete peace of mind for as little as $0.25 / $1,000.00 value
            ($35.00 minimum).
          </p>
          <div className="d-flex justify-content-center pt-2">
            <Button variant="warning" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Alibaba_import;
