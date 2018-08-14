import React from 'react';

import SiteHeader from '../site-header';

import './default-page.scss';

export default class DefaultPage extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <section className="default-page">
        <SiteHeader />
        { children }
      </section>
    );
  }
}
