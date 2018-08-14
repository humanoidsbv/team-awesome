import React from 'react';
import PropTypes from 'prop-types';

import SiteHeader from '../site-header';

import './default-page.scss';

const DefaultPage = ({ children }) => (
  <section className="default-page">
    <SiteHeader />
    { children }
  </section>
);

DefaultPage.propTypes = {
  children: PropTypes.element.isRequired
};

export default DefaultPage;
