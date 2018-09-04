import React from 'react';

import TeamMember from '../team-member';

import './team-members-list.scss';

class TeamMembersList extends React.Component {
  render() {
    return (
      <div className="team-members">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    );
  }
}

export default TeamMembersList;
