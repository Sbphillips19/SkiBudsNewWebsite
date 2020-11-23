import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import ButtonGroup from '../elements/ButtonGroup';
// import Button from '../elements/Button';
import Image from '../elements/Image';
// import Modal from '../elements/Modal';
import MainPhoto from '../../assets/images/mainPhoto.jpg';
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Stay Notified With <span className="text-color-primary">SkiBuds</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                <div className="appLogos">
                  <div>
                    <a href="https://itunes.apple.com/us/app/skibuds/id1462003226?mt=8"><img
                      style={{
                        width: 203,
                        height: 60
                      }}
                      src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-05-02&kind=iossoftware&bubble=ios_apps"
                      alt='Get it on ios'
                    /></a>
                  </div>
                  <div>
                    <a
                      href='https://play.google.com/store/apps/details?id=com.skibuds&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img
                        style={{ width: 237, marginTop: -12 }} alt='Get it on Google Play'
                        src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' /></a>
                  </div>
                </div>
                Download Now to find people to ride with, get lift status notifications, and get up to date mountain information with photo stories at every resort
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                {/* <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get started
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button>
                </ButtonGroup> */}
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            {/* <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            > */}
            <Image
              className="has-shadow"
              src={MainPhoto}
              alt="Hero"
              width={896}
              Cheight={504}
            />
            {/* </a> */}
          </div>
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
          <div className="iconContainer">
            <a href="https://www.facebook.com/SkiBuds-366071947329933/" class="icon" target="_blank" rel="noopener noreferrer"><FaFacebookSquare style={{ width: 50, marginRight: 20 }} color="#3b5998" /></a>
            <a href="https://www.instagram.com/skibudsapp/" class="icon" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ width: 50, marginRight: 20 }} color="white" /></a>
            <a href="https://www.youtube.com/channel/UC1XZ1Vhgs-0lSJJjroAATlg" class="icon" target="_blank" rel="noopener noreferrer"><FaYoutube style={{ width: 50 }} color="#FF0000" /></a>
          </div>

          <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            Stay connect to see team riders and get free swag
          </p>
        </div>
      </div>
    </section >
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;