import React from 'react';

import './time-entry.scss';

class TimeEntry extends React.Component {
  render() {
    return (
      <div className="time-entry">
        <div className="time-entry__name">Port of Rotterdam</div>
        <div className="time-entry__time">
          <div className="time-entry__hours">09:00 - 17:00</div>
          <div className="time-entry__duration">08:00</div>
        </div>
      </div>
    );
  }
}

export default TimeEntry;
