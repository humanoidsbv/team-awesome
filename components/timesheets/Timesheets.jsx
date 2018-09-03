import React from 'react';

import TimeEntries from '../time-entries';

import './timesheets.scss';

class Timesheets extends React.Component {
  render() {
    return (
      <div className="timesheets">
        <TimeEntries />
      </div>
    );
  }
}

export default Timesheets;
