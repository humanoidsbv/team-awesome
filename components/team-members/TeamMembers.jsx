import React from 'react';

import TeamMembersList from '../team-members-list';

import './team-members.scss';

class TeamMembers extends React.Component {
  render() {
    return (
      <div className="team-members">
        <TeamMembersList />
      </div>
    );
  }
}

export default TeamMembers;
