import React from 'react';
import ImageInner from '../components/ImageInner';
import Link from 'next';
import style from '../styles/web.module.css';

const Guide_to_importing_usa = ({ src, alt, width, height }) => {
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
        <div className="text-center m-4 display-6 fw-bold">
          Guide to Importing
        </div>
        <div className="m-4 p-5 bg-light">
          <b>
            Before diving into imports and how to import to USA, here are a few
            suggestions for the exporter (Vendor) in order to expedite the
            clearance of your merchandise by a Customs Broker:
          </b>
          <div>
            <ol>
              <li>
                Place all required information on your customs invoice – This
                includes a detailed item description, number of units/pieces
                (including units of measure), value, country of manufacture, HTS
                classification code
              </li>
              <li>
                Be sure the information on the commercial invoice is legible,
                clear, and keep the data within each column
              </li>
              <li>An accompanying packing list is recommended</li>
              <li>
                Place marks and numbers on each package with corresponding marks
                and numbers on your invoice. This will help customs officials
                identify particular items in your shipment if needed
              </li>
              <li>
                Be sure that the product and documents are compliant with any
                partner government agency requests
              </li>
              <li>
                Work with CBP to develop packing standards for the imported
                product
              </li>
              <li>
                Be sure security procedures are in place. Do not give smugglers
                the opportunity to introduce unknown items into your shipment
              </li>
            </ol>
          </div>
        </div>
        <div className="container p-5">
          <p>
            As your merchandise reaches the United States, it is up to you, the
            consignee, or your appointed customs broker, to file an entry with
            the port director at the port of entry. A Customs entry is not final
            until the shipment has arrived at the port of entry, has been
            authorized by the CBP and any duties / fees have been paid in full.
            If an examination is required prior to release, it is the
            responsibility of the importer of record or their appointed customs
            broker to arrange it.
          </p>
          <p className="mt-2">
            **Please note: In addition to a CBP entry, importer should contact
            other government agencies for particular commodities. If your
            shipment contains alcohol, tobacco, wildlife products (ex: furs)
            Importers should contact the appropriate agency prior to import.
          </p>
          <div className="mt-2 pt-3">
            <b>Right to make entry</b>
            <p>
              Goods/Products may only be imported by their rightful owner or
              their appointed Licensed Customs Broker. The importer of record
              must be stated on the bill of sale as well as the bill of lading
              or AirWay bill in the case of an air shipment.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Documentation</b>
            <p>
              What documents are required to customs clear a shipment? The only
              required documents for an entry are as follows:
            </p>
            <ul>
              <li>
                Commercial invoice (bill of sale) or proforma invoice if
                commercial invoice cannot be produced
              </li>
              <li>PGA form, if required (ex: FDA, EPA, etc.)</li>
            </ul>
            <p>
              All other documentation will be received directly from your
              freight forwarder or trucking company.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Commercial invoice</b>&nbsp;A commercial invoice should include
            the following:
            <ul>
              <li>US port of entry</li>
              <li>Contact information of Purchaser, Vendor, & Shipper</li>
              <li>
                Detailed description of merchandise (including country of
                manufacture)
              </li>
              <li>Piece count of each product (quantities & measures)</li>
              <li>Cost per item and currency</li>
              <li>
                All charges relating to the shipment including packaging,
                shipping charges
              </li>
              <li>Date of purchase</li>
              <li>
                The invoice must be in English or accompanied by an accurate
                English translation
              </li>
            </ul>
          </div>
          <div className="mt-2 pt-3">
            <b>Surety (Bond)</b>
            <p>
              All imports must be accompanied by a bond in order to ensure the
              payment of any duties, taxes, or fees relating to import. A bond
              can be purchased through a US based surety company or your
              selected Customs Broker There are 2 types of customs bond:
            </p>
            <ol>
              <li>
                <b>Annual Bond</b> – This is the most common and cost effective
                bond as it covers all imports for 1 year. A bond covering an
                amount of $50,000.00 USD will cost between $400.00 – $450.00
                USD. Larger bonds can be purchased as well extensions of a
                smaller bond.
              </li>
              <li className="pt-3">
                <b>Single-Entry Bond</b> – Single entry bonds are most often
                used when importers do not expect to receive more than 5-10 per
                year and cost about 5% of the value of the shipment
              </li>
            </ol>
          </div>
          <div className="mt-2 pt-3">
            <b>Examinations</b>
            <p>
              After the submission of a customs entry, U.S. Customs and Border
              Patrol (CBP) has the right to examination. These Examinations are
              done completely at random, but the chances of being examined are
              much higher if it is your first time importing into the country.
              IF no legal or regulatory violations have been found, your
              shipment will be released. Any charges relating the inspection are
              billed to the importer of record directly or through your
              appointed Customs Broker.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Entry for Warehouse</b>
            <p>
              If the importer of record would like to differ applicable duties,
              a shipment may be placed in a CBP bonded warehouse. The goods can
              remain in the bonded warehouse for up to 5 years from the day of
              import and goods can be withdrawn at any time with the payment of
              applicable duty. Should the importer wish to manipulate the cargo
              in any way short of manufacture, they may do so under CBP
              supervision. Perishable items, explosives, or prohibited goods may
              not be stored in a CBP bonded warehouse.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Undeclared Goods</b>
            <p>
              If no customs entry has been presented at the port of entry by
              yourself or your appointed Customs Broker within 15 days of
              arrival, the shipment may be placed in a general warehouse at the
              importer’s expense. If not entry is made within 6 months from the
              date of import, they may be sold at public auction or destroyed.
            </p>
          </div>
          <div>
            <b>Mail Entries</b>
            <p>
              As a commercial importer, you may find some advantages using the
              United States Postal Service (USPS) rather than a courier to
              import merchandise into the United States. Some benefits are
              below:
            </p>
            <ul>
              <li>
                Ease of Clearance: All duties on shipments valued under $2,000
                USD are collected by the letter carrier
              </li>
              <li>
                Reduced Shipping Costs: Smaller, low value shipments can often
                be shipped much cheaper through the mail
              </li>
              <li>
                No Formal Entry: No formal entry is required on duty-free
                products valued at less than $2,000.00 USD
              </li>
              <li>
                No Declaration on Personal Shipments: No requirements to customs
                clear a shipment destined to a private individual if under
                $2,000.00 USD Value
              </li>
            </ul>
            <p>
              When shipping Items through the USPS, please be sure to complete
              the following:
            </p>
            <ul>
              <li>
                CBP declaration and commercial invoice securely attached to the
                outer packaging.
              </li>
              <li>
                If declaration or invoice cannot be securely attached to the
                outside of the package, it must be enclosed in the package and
                “invoice enclosed” clearly written on the outside.
              </li>
            </ul>
            <p>Exceptions for $2,000.00 value informal entries:</p>
            <ul>
              <li>Billfolds</li>
              <li>Products made of feather</li>
              <li>Footwear</li>
              <li>Articles of fur</li>
              <li>Articles of leather</li>
              <li>Toys / games</li>
              <li>Others</li>
            </ul>
          </div>
          <div className="mt-2 pt-3">
            <b>Formal vs. Informal Entries</b>
            <p>
              A Formal entry is necessary for imports with a total value above
              $2,500.00 USD. An entry bond is mandatory for a formal entry as it
              ensures payment of applicable duties. Established importers who
              use an annual bond as opposed to a single-entry bond may retrieve
              their goods before the payment of their duties, taxes, and other
              fees (closing of entry). Under usual circumstances, an informal
              customs entry is made possible when the total value of goods
              imported is less than $2,500.00 USD and are usually for personal
              consumption / use. As Just like formal entries, there are
              exceptions to the rule. For example, when importing textiles, an
              informal entry may only be used for values less than $250.00 USD.
              Ask your Customs Broker about how you can use this to your
              advantage.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Section 321</b>
            <p>
              Section 321 is a type of informal entry which allows for the
              release of goods valued at $800.00 USD or less without filing a
              customs entry by you or your Customs Broker. Shipments released
              under “Section 321” are both duty & tax free. To Qualify for for
              Section 321, a shipment may not exceed a total value of $800.00
              USD and must not be one of several lots covered by a single order
              or invoice to which the value would exceed $800.00 USD or the
              equivalent. The shipment must be intended for one private
              individual. For information on section 321, click&nbsp;
              <Link href="/Section_321" className="text-warning">
                here.
              </Link>
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>In-Bond Transportation</b>
            <p>
              Not all imported cargo into the US is entered at the port in which
              it arrives. The importer or transporter may choose a different
              location where the goods must travel past the border and further
              into the United States. In order to do so, these goods must be
              transported in a “Bonded Status” from the port of arrival to the
              port of entry. This can only be accomplished by a bonded carrier
              under CBP form 7512.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Right to Make Entry</b>
            <p>
              Goods arriving in the U.S.A. must be accounted for by the owner,
              purchaser, vendor, his/her authorized employee, or by a licensed
              customs broker. CBP Officers or employees are not legally
              authorized to act as import agents of imported goods but may give
              reasonable advice and assistance. Licensed US Customs Brokers are
              the only persons other than the importer of record authorized to
              act on their behalf. Customs Brokers are private companies
              licensed by CBP to prepare & file entries as well as account for,
              collect, and remit any applicable duties/taxes. If a when a
              customs brokers makes an entry, it must be supported by a CBP
              Power of Attorney.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Examination of goods & Verification of documents</b>
            <p>
              At any given time prior to release, the CBP has the legal right to
              examine and verify all goods destined for the USA as well as their
              supporting documents. Examination is necessary in order to
              validate the following:
            </p>
            <ul>
              <li>The value of goods in order to determine dutiable status</li>
              <li>Whether or not goods follow proper labeling protocol</li>
              <li>Whether the shipment contains prohibited items</li>
              <li>Whether goods are properly invoiced</li>
              <li>
                Whether quantities match those declared or if a shortage exists
              </li>
              <li>Whether shipment contains narcotics</li>
            </ul>
            <p>
              Any costs associated with the coordination of and examination of
              goods is the responsibility of the importer of record and goods
              can be held for release by the coordinating warehouse without
              payment in full.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Tare</b>
            <p>
              When determining dutiable amounts based on net weight, a deduction
              is made from the gross weight, referred to as Tare. Tare is the
              allowance for deficiency in weight caused by packaging, transport
              box, bag, etc.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Commingling</b>
            <p>
              Orderly packing and proper invoicing are paramount when it comes
              to importing into the U.S.A. If during an inspection items subject
              to different rates of duty are so packed together that a CBP
              officer cannot determine the quantity without separating them, the
              combined items will be subject to the highest rate of applicable
              duty.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Reasonable Care</b>
            <p>
              Reasonable care is the responsibility of the importer. CBP
              publishes a wealth of information to assist the import community
              on reasonable care and the use of a licensed Customs Broker can
              all but guarantee compliance.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Assessment of Duty</b>
            <p>
              All goods imported into the United States are subject to duty or
              duty-free entry depending on the HTS classification. Duty can be
              applied based on the value of an item, weight, or size, or count.
              Duty Can be eliminated through trade agreements such as NAFTA.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>Ruling on Import Duties</b>
            <p>
              CBP makes a decision on the dutiable status of an item once the
              entry is liquidated (after entry documents are filed). An Importer
              / Exporter or any interested party may receive advanced
              information by submitting a request for ruling. This can be done
              by directing the appropriate information to:
            </p>
            <p>
              U.S. Customs and Border Protection Attention: Office of
              Regulations and Rulings Washington, DC 20229
            </p>
            <p>Or</p>
            <p>
              Director, National Commodity Specialist Division U.S. Customs and
              Border protection One Penn Plaza, 11th Floor New York, New York
              10119
            </p>
            <p>
              Importers may obtain a binding ruling which will be binding at all
              ports of entry unless revoked, by submitting to the national
              commodity specialist division. The following is required for a
              ruling:
            </p>
            <ul>
              <li>
                Name, Address, and other identifying information of vendor,
                purchaser, and manufacturer as well as the manufacturer ID code
              </li>
              <li>Names of ports at which the products may be entered</li>
              <li>
                A description of the transaction and its country of origin
              </li>
              <li>
                A statement from the importer that according to their knowledge,
                there are no known issues regarding the product before the CBP
                or any court system
              </li>
              <li>
                Statement as to whether or not classification advise has ever
                been given by a CBP officer and from whom
              </li>
              <li>
                Complete description of goods (can include samples, sketches,
                etc.)
              </li>
              <li>
                Cost breakdown of each component and their respective quantities
              </li>
              <li>Description of the primary use of the product</li>
            </ul>
          </div>
          <div className="mt-2 pt-3">
            <b>Temporary Free Importation (TIB)</b>
            <p>
              Goods being imported into the United States for non-resale may be
              admitted into the country under bond without the payment of duties
              for exportation within one year of the date of import. A TIB may
              be extended for one year at a time with a maximum of 3 years.
              Products / Merchandise entered under a temporary importation bond
              must be exported, destroyed, or extended before the expiration of
              the bond period. All goods entered under Temporary Free
              Importation are still subject to quotas.
            </p>
          </div>
          <div className="mt-2 pt-3">
            <b>ATA Carnet</b>
            <p>
              An ATA carnet is an international customs document used for the
              temporary duty-free import of a product or shipment. The carnet
              serves serves as a guarantee against payment of duties should the
              goods not be exported and is valid for one year. During this
              period, the Carnet holder can make as many trips with their
              accompanying goods as they like. A Carnet is generally used in the
              United States for the temporary admission of:
            </p>
            <ul>
              <li>Professional equipment</li>
              <li>Advertising material</li>
              <li>Commercial samples</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Guide_to_importing_usa;
