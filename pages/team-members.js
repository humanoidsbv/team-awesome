import React from 'react';

import DefaultPage from '../site/components/default-page';
import Overview from '../team-members/components/overview';

import '../shared/styles/_default.scss';
import '../shared/styles/_fonts.scss';
import '../shared/styles/_reset.scss';

const TeamMembersPage = () => (
  <DefaultPage>
    <Overview />
  </DefaultPage>
);

export default TeamMembersPage;
