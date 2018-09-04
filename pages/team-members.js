import React from 'react';

import DefaultPage from '../components/default-page';
import TeamMembers from '../components/team-members';

import '../shared/styles/_default.scss';
import '../shared/styles/_fonts.scss';
import '../shared/styles/_reset.scss';

const TeamMembersPage = () => (
  <DefaultPage>
    <TeamMembers />
  </DefaultPage>
);

export default TeamMembersPage;
