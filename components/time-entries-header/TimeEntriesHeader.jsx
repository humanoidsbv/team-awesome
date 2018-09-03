import React from 'react';

import './time-entries-header.scss';

class TimeEntriesHeader extends React.Component {
  render() {
    return (
      <div className="time-entries-header">
        <h2 className="time-entries-header__date">Friday 29-07 (Today)</h2>
        <div className="time-entries-header__time">08:00</div>
      </div>
    );
  }
}

export default TimeEntriesHeader;
