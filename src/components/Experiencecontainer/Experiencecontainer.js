import React, { useEffect } from 'react';
import WOW from 'wowjs';
import Experience from '../Experiencebox/Experience';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './experiencecontainer.css';
import './exp.css';

const ExperienceContainer = () => {


  return (
    <div id="exp" className="sectionClass">
      <div className="row">
        <div className="sectiontitle">
          <h2>Work experience</h2>
          <span className="headerLine"></span>
        </div>
        <div className="fullWidth eight columns">
          <ul className="cbp_tmtimeline">
            <li>
              <div className="cbp_tmicon cbp_tmicon-phone">
                <img src='https://media.licdn.com/dms/image/C560BAQGtltOkBRRb9A/company-logo_100_100/0/1630642818423?e=2147483647&v=beta&t=megyMGne7GH4gfkREr0Emn2MEUSbHWEgo4EzyNi1cmQ' />
              </div>
              <div className="cbp_tmlabel wow fadeInRight animated">
                <h3>React Developer</h3>
                <div className="date">
                  <i className="fa fa-calendar"></i> Jan 2023 - Present
                </div>
                <h4><i className="fa fa-flag"></i>Fuzionest Private Limited Coimbatore</h4>
                <p className="projectParagraph">
                  Project:Pasubot(Product)<br></br>
                  Domains: Front End – React, Database –Supabase Config<br></br>
                  <br></br>
                  {/* <div class="click_container">
                    <span data-title="Click" class="text">
                    Click
                    </span>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8xnsqiqfHuxPLLcgalu5_4V9c0zuc2_VyA&s' />
                  </div> */}
                  Project:RSL(Client Dubai Service team)<br></br>
                  Domains:  Front End – React, Database – MongoDB<br></br>
                  <br></br>
                  {/* <div class="click_container">
                    <span data-title="Click" class="text">
                    Click
                    </span>
                    <img src='https://admin.royalsmartlifestyle.com/assets/illustrations/logo-dark_rsl.svg' />
                  </div> */}
                  Project:Warehouse Management System(Client: Bosch Service Team)<br></br>
                  Domains: Front End – React, Database – MongoDB
                </p>
              </div>
            </li>
            <li>
              <div className="cbp_tmicon cbp_tmicon-screen">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeA6ORXiXHcPmgrNWJMFdT9v8VSiuUw9Usw&s' />
              </div>
              <div className="cbp_tmlabel wow fadeInRight animated">
                <h3>React Intership</h3>
                <h4><i className="fa fa-flag"></i>Mallow Technologies Karur</h4>
                <div className="date">
                  <i className="fa fa-calendar"></i> Mar 2023- Oct 2023
                </div>
                <p className="projectParagraph">
                Project:Post Dashboard<br></br>
                Domains: Front End – React, Database – SQL
                </p>
              </div>
            </li>
            <li>
              <div className="cbp_tmicon cbp_tmicon-mail">
                <i className="faPra fa-briefcase"></i>
              </div>
              <div className="cbp_tmlabel wow fadeInRight animated">
                <h3>Flutter Intership</h3>
                <h4><i className="fa fa-flag"></i> Awerum software solution pollachi</h4>
                <div className="date">
                  <i className="fa fa-calendar"></i> Jan 2023- Mar 2023
                </div>
                <p className="projectParagraph">
                Project:Rabid Service<br></br>
                Domains: Front End – Flutter, Database – MongoDB
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceContainer;
