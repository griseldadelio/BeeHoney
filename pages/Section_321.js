import React from 'react';
import ImageInner from '../components/ImageInner';
import style from '../styles/web.module.css';

const Section_321 = ({ src, alt, width, height }) => {
  src = '/images/trucks.jpeg';
  alt = 'Picture of the author';
  width = '1450px';
  height = '250px';
  return (
    <>
      <div className={style.resource_image}>
        <ImageInner src={src} alt={alt} width={width} height={height} />
      </div>

      <div className="container">
        <div className="text-center m-5 display-6 fw-bold text-warning">
          Section 321 allows for goods valued at $800.00 USD or less, to enter
          the United States duty-free and without a formal entry – A great
          option for importers looking to save money, but it can cost you some
          time.
        </div>
        <div className="container">
          <h4>Section 321 Restrictions</h4>
          <b className="text-warning">
            Not all goods valued at $800.00 USD or less are subject to release
            without formal entry under this provision:
          </b>
          <div>
            <ul>
              <li>
                Merchandise subject to anti-dumping / countervailing duty
                (ADD/CVD)
              </li>
              <li>
                Merchandise requiring inspection as a condition of release
              </li>
              <li>
                No alcoholic beverages, perfume containing alcohol, cigars, or
                cigarettes
              </li>
              <li>Merchandise regulated by FDA, FSIS, NHTSA, CPSA, and USDA</li>
              <li>
                Exemptions have been made to FDA products such as: Cosmetics,
                Dinnerware, Food, and biological samples
              </li>
              <li>
                Regardless of the value, USCBP reserves the right to deny
                section 321 and demand a formal customs entry
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <h4>How to declare section 321</h4>
          <b className="text-warning">Truck</b>
          <div>
            <ul>
              <li>
                The carrier must file the ACE manifest as intangible
                goods/section 321
              </li>
            </ul>
          </div>
          <b className="text-warning">Ocean</b>
          <div>
            <ul>
              <li>
                ISF (10+2) is still required for a section 321 and Clearit USA
                is happy to file it on your behalf
              </li>
              <li>
                You will need to present an arrival notice and invoice to U.S.
                Customs in person
              </li>
              <li>
                A stamped copy of documents must be presented to CFS warehouse
                to guarantee the releases of your cargo
              </li>
            </ul>
          </div>
          <b className="text-warning">Air</b>
          <div>
            <ul>
              <li>
                Clearit USA Recommends you advise your airline prior to shipping
                your cargo that the merchandise should be manifested as
                intangible goods/section 321
              </li>
              <li>
                If this is not complete, you must go to U.S. Customs at the
                airport of arrival with the Airway Bill and invoice and ask the
                Customs Officer to release under section 321
              </li>
            </ul>
          </div>
          <b className="text-warning">
            For more information on section 321, feel free to ask an agent.
          </b>
        </div>
      </div>
    </>
  );
};
export default Section_321;
