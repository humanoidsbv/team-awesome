import React from 'react';

import './team-member.scss';

class TeamMember extends React.Component {
  render() {
    return (
      <div className="team-member">
        <div className="team-member__info">
          <div className="team-member__name">Boris Arkenaar</div>
          <div className="team-member__job">Frontend Post-Master Lead</div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
