/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Toggle from 'components/Toggle';
import Wrapper from './Wrapper';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';
import { updateQueryStringParameter, parseQuery } from 'utils/helper';

class LocaleToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount() {
    // load locale from query
    let lang = 'en'
    let qs = parseQuery(this.props.location.search)
    if(qs['locale'] && qs['locale'] != '' && appLocales.indexOf(qs['locale']) != -1) lang = qs['locale']
    this.props.onLocaleToggle(lang)
  }

  changeLang(e, lang){
    e.preventDefault();
    this.props.onLocaleToggle(lang)

    // update locale query
    let query = this.props.location.search
    query = updateQueryStringParameter(query, 'locale', lang)
    this.props.history.push('/' + query)
  }

  render() {
    console.log("this.props", this.props)
    return (
      <div className="blk-lang">
          <div className="lang-choose">
            <span className="ttl"><FormattedMessage
                            {...messages[this.props.locale]}/></span>
            <i className="fa fa-caret-down"></i>
          </div>
          <ul className="lang-list">
            {appLocales && appLocales.map((itm, i) => (
              <li key={i}>
                <a href="#" onClick={(e) => this.changeLang(e, itm)}><FormattedMessage
                            {...messages[itm]}/></a>
              </li>
            ))}
          </ul>
        </div>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (lang) => dispatch(changeLocale(lang)),
    dispatch,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocaleToggle));
