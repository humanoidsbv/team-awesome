import React from 'react';

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
      <header className={`
        site-header
        site-header--${isMenuVisible ? 'open' : 'closed'}
      `}>
        <div className="site-header__mobile">
          <span className="site-header__title">team awesome</span>
          <button
            type="button"
            className="site-header__nav-button"
            onClick={ this.handleNavButtonClick }
          >
            <span className="site-header__nav-button-label">Toggle Navigation</span>
          </button>
        </div>
        <nav className="site-header__nav">Navigation</nav>
      </header>
    );
  }
}

export default SiteHeader;
