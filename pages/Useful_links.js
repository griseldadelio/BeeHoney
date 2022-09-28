import React from 'react';
import ImageInner from '../components/ImageInner';
import style from '../styles/web.module.css';

const Useful_links = ({ src, alt, width, height }) => {
  src = '/images/trucks.jpeg';
  alt = 'Picture of the author';
  width = '1450px';
  height = '250px';
  return (
    <>
      <div className={style.resource_image}>
        <ImageInner src={src} alt={alt} width={width} height={height} />
      </div>
      <div className="container text-center">
        <div className="text-center m-5 display-6 fw-bold text-warning">
          Looking for more information? Check out these useful links
        </div>
        <h4>
          <b>General</b>
        </h4>
        <div>
          <h6>US Customs Directives / Handbooks</h6>
          <a
            href="https://www.cbp.gov/trade/rulings/directives-handbooks"
            className="text-warning"
          >
            https://www.cbp.gov/trade/rulings/directives-handbooks
          </a>
        </div>
        <div className="mt-5 mb-3">
          <h4>
            <b>Customs Compliance</b>
          </h4>
        </div>
        <div className="mt-2 p-2">
          <h6>
            US Customs Informed Compliance Manuals – Specific by Product /
            Industry / Regulations
          </h6>
          <a
            href="https://www.cbp.gov/trade/rulings/informed-compliance-publications"
            className="text-warning"
          >
            https://www.cbp.gov/trade/rulings/informed-compliance-publications
          </a>
        </div>
        <div className="mt-2 p-2">
          <h6>Anti-Dumping Scope Search By County</h6>
          <a
            href="http://web.ita.doc.gov/ia/CaseM.nsf/136bb350f9b3efba852570d9004ce782!OpenView&Start=28.2&Count=30&CollapseView"
            className="text-warning"
          >
            http://web.ita.doc.gov/ia/CaseM.nsf/136bb350f9b3efba852570d9004ce782!OpenView&Start=28.2&Count=30&CollapseView
          </a>
        </div>
        <div className="mt- 2 p-2">
          <h6>19 CFR – US Customs Regulations</h6>
          <a
            href="https://www.law.cornell.edu/cfr/text/19/chapter-I"
            className="text-warning"
          >
            https://www.law.cornell.edu/cfr/text/19/chapter-I
          </a>
        </div>
        <div className="mt-5 mb-3">
          <h4>
            <b>HTS Code Resources</b>
          </h4>
        </div>
        <div className="mt-2 p-2">
          <h6>Harmonized Tariff Schedule</h6>
          <a href="https://hts.usitc.gov/current" className="text-warning">
            https://hts.usitc.gov/current
          </a>
        </div>
        <div className="mt-2 p-2">
          <h6>HTS Rulings</h6>
          <a href="https://rulings.cbp.gov/home" className="text-warning">
            https://rulings.cbp.gov/home
          </a>
        </div>
        <div className="mt-5 mb-3">
          <h4>
            <b>Government Agencies</b>
          </h4>
        </div>
        <div className="mt-2 p-2">
          <h6>FDA Medical Device Lookup</h6>
          <a
            href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRL/rl.cfm"
            className="text-warning"
          >
            https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRL/rl.cfm
          </a>
        </div>
        <div className="mt-2 p-2">
          <h6>FDA Product Code Builder</h6>
          <a
            href="https://www.accessdata.fda.gov/scripts/ora/pcb/index.cfm?action=main.pcb"
            className="text-warning"
          >
            https://www.accessdata.fda.gov/scripts/ora/pcb/index.cfm?action=main.pcb
          </a>
        </div>
        <div className="mt-2 p-2">
          <h6>FDA Import Alerts</h6>
          <a
            href="https://www.fda.gov/ForIndustry/ImportProgram/ActionsEnforcement/ImportAlerts/default.htm"
            className="text-warning"
          >
            https://www.fda.gov/ForIndustry/ImportProgram/ActionsEnforcement/ImportAlerts/default.htm
          </a>
        </div>
        <div className="mt-2 p-2">
          <h6>FDA Prior Notice</h6>
          <a
            href="https://www.fda.gov/food/guidanceregulation/importsexports/importing/ucm2006836.htm"
            className="text-warning"
          >
            https://www.fda.gov/food/guidanceregulation/importsexports/importing/ucm2006836.htm
          </a>
        </div>
        <div className="mt-2 p-2">
          <h6>FDA FSVP Program – Food</h6>
          <a
            href="https://www.fda.gov/Food/GuidanceRegulation/FSMA/ucm361902.htm"
            className="text-warning"
          >
            https://www.fda.gov/Food/GuidanceRegulation/FSMA/ucm361902.htm
          </a>
        </div>
        <div className="mt-2 p-2">
          <h6>USDA Import Manuals</h6>
          <a
            href="https://www.aphis.usda.gov/aphis/ourfocus/planthealth/complete-list-of-electronic-manuals"
            className="text-warning"
          >
            https://www.aphis.usda.gov/aphis/ourfocus/planthealth/complete-list-of-electronic-manuals
          </a>
        </div>
        <div className="mt-2 p-2">
          <h6>USDA FAVIR – Fresh Fruit & Vegetables Import Requirements</h6>
          <a
            href="https://epermits.aphis.usda.gov/manual/index.cfm?CFID=2571263&CFTOKEN=3821425a2a20442b-4208E626-C6E0-B3F6-88B66B6C8EB4E2BD&ACTION=pubHome"
            className="text-warning"
          >
            https://epermits.aphis.usda.gov/manual/index.cfm?CFID=2571263&CFTOKEN=3821425a2a20442b-4208E626-C6E0-B3F6-88B66B6C8EB4E2BD&ACTION=pubHome
          </a>
        </div>
      </div>
    </>
  );
};
export default Useful_links;
