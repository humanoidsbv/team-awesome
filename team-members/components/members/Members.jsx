import React from 'react';

import Member from '../member';

import './members.scss';

class Members extends React.Component {
  render() {
    return (
      <div className="members">
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    );
  }
}

export default Members;
