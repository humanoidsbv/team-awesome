import React from 'react';

import './member.scss';

class TeamMember extends React.Component {
  render() {
    return (
      <div className="member">
        <img
          className="member__photo"
          src="/static/profile-photo-boris.png"
          alt="Profile of Boris"
          width="50"
          height="50"
        />
        <div className="member__info">
          <div className="member__name">Boris Arkenaar</div>
          <div className="member__job">Frontend Post-Master Lead</div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
