import React from 'react';

import DefaultPage from '../components/default-page';
import Timesheets from '../components/timesheets';

import '../shared/styles/_default.scss';
import '../shared/styles/_fonts.scss';
import '../shared/styles/_reset.scss';

const TimesheetsPage = () => (
  <DefaultPage>
    <Timesheets />
  </DefaultPage>
);

export default TimesheetsPage;
