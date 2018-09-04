import React from 'react';

import DefaultPage from '../site/components/default-page';
import Overview from '../timesheets/components/overview';

import '../shared/styles/_default.scss';
import '../shared/styles/_fonts.scss';
import '../shared/styles/_reset.scss';

const TimesheetsPage = () => (
  <DefaultPage>
    <Overview />
  </DefaultPage>
);

export default TimesheetsPage;
