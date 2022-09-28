import React from 'react';
import { Card } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-5 bg-dark p-4 text-center ">
      <div className="text-white display-8 fw-bold">
        <Icon.GeoAltFill />
        &nbsp; 30 N Gould St Sheridan, WY 82801, USA.
      </div>
      <div className="text-white display-8 fw-bold">
        <Icon.EnvelopeFill />
        <Link href="mailto:info@beehoneyllc.us" color="inherit" target="_blank">
          &nbsp; info@beehoneyllc.us
        </Link>
      </div>
      <div className="text-white display-8 fw-bold border-bottom pb-2">
        <Icon.Whatsapp color="green" />
        <Link href="https://web.whatsapp.com/" color="inherit" target="_blank">
          &nbsp; 23459876
        </Link>
      </div>
      <Card.Footer className="text-center pt-2">
        <small className="text-center text-muted">
          Bee Honey LLC 2022 ©. All Rights Reserved.
        </small>
      </Card.Footer>
    </footer>
  );
};
export default Footer;
