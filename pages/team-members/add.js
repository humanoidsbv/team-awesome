import React from 'react';

import DefaultPage from '../../site/components/default-page';

import Add from '../../team-members/components/add';

import '../../shared/styles/_default.scss';
import '../../shared/styles/_fonts.scss';
import '../../shared/styles/_reset.scss';

const TeamMembersAddPage = () => (
  <DefaultPage>
    <Add />
  </DefaultPage>
);

export default TeamMembersAddPage;
