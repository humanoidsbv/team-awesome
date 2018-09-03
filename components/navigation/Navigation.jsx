import React from 'react';
import Link from 'next/link';

import './navigation.scss';

const Navigation = () => (
  <ul className="navigation">
    <li className="navigation__item navigation__item--active">
      <Link href="/timesheets">
        <a className="navigation__link">Timesheets</a>
      </Link>
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
