import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Stay connected and up to date',
    paragraph: 'App based on community feedback.  Constantly updating to give you the best experience on the hill'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Real Time Updates
                  </div>
                <h3 className="mt-0 mb-12">
                  Lift Status Notifications
                  </h3>
                <p className="m-0">
                  Subscribe to your favorite lifts to see when they open, are put on hold, or close.  Never have to refresh your phone or look at the boards at the top of the lifts.  Notifications available on smart watches as well.*
                  <br />
                  <span style={{ fontSize: 12 }}>*Currently only featured at some resorts</span></p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/screenshots/SetLiftStatusNotifications.png')}
                  alt="Lift Status Notifications"
                  width={100}
                  height={200}
                  className="imageSizing"
                />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Find new friends
                  </div>
                <h3 className="mt-0 mb-12">
                  Chat to users with same preferences
                  </h3>
                <p className="m-0">
                  Find people to ride with based on skill level, carpool to the mountain (save money on gas & parking, help the environment, reduce traffic, and have good convos), and find people to grab a drink with*
                  <br />
                  <br />
                  Chat at different mountains, in certain cities, and privately with other users
                  <br />
                  <span style={{ fontSize: 12 }}>*Carpooling channels are currently not in colorado due to regulations</span>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/screenshots/CheckOutChannels.png')}
                  alt="Select Channels"
                  width={100}
                  height={200}
                  className="imageSizing"
                />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2021
                  </div>
                <h3 className="mt-0 mb-12">
                  SkiBuds Events
                  </h3>
                <p className="m-0">
                  We are working harder than ever to make events for users in cities around the US.  From BBQ's, Corn Hole Tournaments, to bar specials we will be working to help users find others connect and have the best mountain experience
                  <br />
                  <br />
                  Due to current conditions we will be postponing this feature to next season.
                  <br />
                  <br />
                  Any connections to new Bars and Breweries is appreciated.  Also looking for ambassadors across the country.  Please reach out to PowWowLLC1@gmail.com for more information
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/bbq.jpg')}
                  alt="Attend SkiBuds Meetups"
                  width={100}
                  height={200}
                  className="imageSizing2"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;