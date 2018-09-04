import React from 'react';

import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2 className="header__date">Friday 29-07 (Today)</h2>
        <div className="header__time">08:00</div>
      </div>
    );
  }
}

export default Header;
