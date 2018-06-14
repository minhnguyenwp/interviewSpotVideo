import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import LocaleToggle from '../../containers/LocaleToggle'

// AREA JS
function showLang() {
  if(!$('.lang-choose').length) { return; }

  $('.lang-choose').on('click', function(e) {
    e.preventDefault();

    var $a_lang = $(this),
        $lang   = $a_lang.siblings('.lang-list');

    if($a_lang.hasClass('active')) {
      $a_lang.removeClass('active');
      $lang.hide();
    } else {
      $a_lang.addClass('active');
      $lang.show();
    }
  });

  // clickout
  $(document).on('click', function(e) {
    if($(e.target).is('.lang-choose')
    || $(e.target).is('.lang-choose *')) { return; }

    $('.lang-choose').removeClass('active');
    $('.lang-list').hide();
  });
}

class Header extends React.Component { 
  componentDidMount() {
    // js show language
    showLang();
  }

  render() {
    return (
      <div className="header-wrap">
        <A href="/" className="hd-logo">
          <Img src={'assets/images/logo.png'} alt="" />
        </A>
        <LocaleToggle />     
      </div>
    );
  }
}

export default Header;
