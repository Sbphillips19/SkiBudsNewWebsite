import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto: powWowLLC1@gmail.com">Contact</a>
        </li>
        <li>
          <Link to="partners">Partners</Link>
        </li>
        <li>
          <a href="https://www.freeprivacypolicy.com/privacy/view/1cd8d9ff0862aec37bcbf6b855796d5f" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;