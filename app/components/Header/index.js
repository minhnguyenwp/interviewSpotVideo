import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header-wrap">
        <A href="#" className="hd-logo">
          <Img src={'assets/images/logo.png'} alt="" />
        </A>
        <div className="blk-lang">
          <div className="lang-choose">
            <span>English (US)</span>
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
