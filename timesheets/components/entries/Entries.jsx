import React from 'react';

import Header from '../header';
import Entry from '../entry';

import './entries.scss';

class Entries extends React.Component {
  render() {
    return (
      <div className="entries">
        <Header />
        <Entry />
        <Header />
        <Entry />
        <Entry />
        <Entry />
        <Header />
        <Entry />
        <Entry />
      </div>
    );
  }
}

export default Entries;
