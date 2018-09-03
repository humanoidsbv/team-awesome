import React from 'react';

import TimeEntriesHeader from '../time-entries-header';
import TimeEntry from '../time-entry';

import './time-entries.scss';

class TimeEntries extends React.Component {
  render() {
    return (
      <div className="time-entries">
        <TimeEntriesHeader />
        <TimeEntry />
        <TimeEntriesHeader />
        <TimeEntry />
        <TimeEntry />
        <TimeEntry />
        <TimeEntriesHeader />
        <TimeEntry />
        <TimeEntry />
      </div>
    );
  }
}

export default TimeEntries;
