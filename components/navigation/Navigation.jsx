import React from 'react';

import './navigation.scss';

const Navigation = () => (
  <ul className="navigation">
    <li className="navigation__item navigation__item--active">
      <a
        className="navigation__link"
        href="/timesheets"
      >
        Timesheets
      </a>
    </li>
    <li className="navigation__item">
      <a
        className="navigation__link"
        href="/team-members"
      >
        Team members
      </a>
    </li>
    <li className="navigation__item">
      <a
        className="navigation__link"
        href="/projects"
      >
        Projects
      </a>
    </li>
    <li className="navigation__item">
      <a
        className="navigation__link"
        href="/clients"
      >
        Clients
      </a>
    </li>
    <li className="navigation__item">
      <a
        className="navigation__link"
        href="/documents"
      >
        Documents
      </a>
    </li>
  </ul>
);

export default Navigation;
