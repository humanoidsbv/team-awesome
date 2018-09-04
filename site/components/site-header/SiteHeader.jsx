import React from 'react';

import Navigation from '../navigation';
import ProfileButton from '../profile-button';

import './site-header.scss';

class SiteHeader extends React.Component {
  state = { isMenuVisible: false };

  handleNavButtonClick = () => {
    this.setState((state) => ({
      isMenuVisible: !state.isMenuVisible
    }));
  }

  render() {
    const { isMenuVisible } = this.state;

    return (
      <header
        className={`
          site-header
          site-header--${isMenuVisible ? 'open' : 'closed'}
        `}
      >
        <div className="site-header__title">team awesome</div>
        <button
          type="button"
          className={`
            site-header__navigation-button
            site-header__navigation-button--${isMenuVisible ? 'open' : 'closed'}
          `}
          onClick={this.handleNavButtonClick}
        >
          <span className="site-header__navigation-button-label">Toggle Navigation</span>
        </button>
        <Navigation className="site-header__navigation" />
        <ProfileButton className="site-header__profile-button" />
      </header>
    );
  }
}

export default SiteHeader;
