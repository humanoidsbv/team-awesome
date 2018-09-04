import React from 'react';

import Entries from '../entries';

import './overview.scss';

class Overview extends React.Component {
  render() {
    return (
      <div className="overview">
        <Entries />
      </div>
    );
  }
}

export default Overview;
