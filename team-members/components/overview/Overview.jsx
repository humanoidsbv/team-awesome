import React from 'react';

import Members from '../members';

import './overview.scss';

class Overview extends React.Component {
  render() {
    return (
      <div className="overview">
        <h2 className="overview__title">All Humanoids</h2>
        <Members />
      </div>
    );
  }
}

export default Overview;
