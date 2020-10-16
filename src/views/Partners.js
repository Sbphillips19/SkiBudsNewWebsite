import React from 'react';
// import sections
// import Cta from '../components/sections/Cta';
import Logo from '../assets/images/logo.png';
import RipATrip from '../assets/images/ripatrip_logo_green.png';

const Partners = () => {

  return (
    <>
      <section class="bg-light main2">
        <div class="container">
          <div class="txt-center">
            <img src={Logo} alt="logo" className="logo" />
            <p class="lead2">Partners</p>
          </div>
        </div>
      </section>

      <section>
        <div class="containerAffiliates">
          <div class="affilDiv">
            <a href="https://ripatrip.com/" rel="noopener noreferrer" target="_blank">
              <img src={RipATrip} alt="ripatrip" className="ripatrip" />
            </a>
          </div>
        </div>
        <div><p class="lead2">Contact us to partner this upcoming season!</p></div>
      </section>
    </>
  );
}

export default Partners;