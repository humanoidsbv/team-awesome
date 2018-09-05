import React from 'react';

import './member.scss';

class TeamMember extends React.Component {
  state = {
    isExpanded: false
  }

  handleClick = () => this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }))

  render() {
    return (
      <div
        className={`
          member
          member--${this.state.isExpanded ? 'expanded' : 'collapsed' }
        `}
      >
        <div
          className="member__primary"
          onClick={() => this.handleClick()}
        >
          <img
            className="member__photo"
            src="/static/profile-photo-boris.png"
            alt="Profile of Boris"
            width="50"
            height="50"
          />
          <div className="member__info">
            <div className="member__value">Boris Arkenaar</div>
            <div className="member__label">Frontend Post-Master Lead</div>
          </div>
        </div>
        <div className="member__secondary">
          <div className="member__extra-info">
            <div className="member__info">
              <div className="member__value">Humanoids</div>
              <div className="member__label">Current employer</div>
            </div>
            <div className="member__info">
              <div className="member__value">February 2018</div>
              <div className="member__label">Starting date</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
