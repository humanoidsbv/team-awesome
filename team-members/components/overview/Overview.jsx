import React from 'react';

import Members from '../members';

import './overview.scss';

class Overview extends React.Component {
  render() {
    return (
      <div className="overview">
        <Members />
      </div>
    );
  }
}

export default Overview;
