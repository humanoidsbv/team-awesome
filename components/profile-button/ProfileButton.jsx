import React from 'react';

import './profile-button.scss';

const ProfileButton = () => (
  <div className="profile-button">
    <div className="profile-button__badge">
      <img
        className="profile-button__logo"
        src="/static/humanoids-logo.png"
        alt="Humanoids Logo"
        width="75"
        height="10"
      />
      <img
        className="profile-button__photo"
        src="/static/profile-photo-boris.png"
        alt="Profile of Boris"
        width="32"
        height="32"
      />
    </div>
  </div>
);

export default ProfileButton;
