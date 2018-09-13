import React from 'react';
import Link from 'next/link';

import Members from '../members';

import './overview.scss';

class Overview extends React.Component {
  render() {
    return (
      <div className="overview">
        <header className="overview__header">
          <h2 className="overview__title">All Humanoids</h2>
          <Link href="/team-members/add">
            <a className="overview__add-button">New Humanoids</a>
          </Link>
        </header>
        <Members />
      </div>
    );
  }
}

export default Overview;
