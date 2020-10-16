import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import Input from '../elements/Input';
import VD from '../../assets/featuredIn/vd-email-logo.png';
import DP from '../../assets/featuredIn/denverPost.png';
import Teton from '../../assets/featuredIn/teton.png';
import KRDO from '../../assets/featuredIn/krdo.png';
import Image from '../elements/Image';


const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          {/* <div className="cta-slogan">
            <h3 className="m-0">
              For previewing layouts and visual?
              </h3>
          </div>
          <div className="cta-action">
            <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
          </div> */}
          <div className="flex">
            <div className="featuredInText">As featured in</div>
            <div className="flexRow">
              <a href="https://www.vaildaily.com/entertainment/skibuds-app-connecting-skiers-snowboarders-based-on-skill-level-at-over-100-resorts/" rel="noopener noreferrer" target="_blank">
                <Image
                  src={VD}
                  alt="VailDaily"
                  width={100}
                  height={200}
                  className="imageSizingLogosBigger"

                />
              </a>
              <a href="https://www.tetongravity.com/story/gear-tech/is-this-app-the-new-tinder-for-skiers" rel="noopener noreferrer" target="_blank">
                <Image
                  src={Teton}
                  alt="TetonGravityResearch"
                  width={100}
                  height={200}
                  className="imageSizingLogos"
                />
              </a>
              <a href="https://krdo.com/news/2020/01/20/colorado-man-creates-app-to-carpool-to-the-mountains-find-ski-buddies/?fbclid=IwAR07zY_zc4ke2l3MiqsbwTcyAv6WoMc8t4GJ1W_gMthB6n_A_7juIJYMpaI" rel="noopener noreferrer" target="_blank">
                <Image
                  src={KRDO}
                  alt="KRDO"
                  width={100}
                  height={200}
                  className="imageSizingLogos"
                />
              </a>
              <a href="https://theknow.denverpost.com/2020/02/16/skibuds-app-colorado-resorts/233844/" rel="noopener noreferrer" target="_blank">
                <Image
                  src={DP}
                  alt="DenverPost"
                  width={100}
                  height={200}
                  className="imageSizingLogosBigger"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;