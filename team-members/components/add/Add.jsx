import React from 'react';
import Link from 'next/link';

import './add.scss';

class Add extends React.Component {
  render() {
    return (
      <div className="add">
        <header className="add__header">
          <h2 className="add__title">Add new team member</h2>
          <div className="add__controls">
            <Link href="/team-members">
              <a className="add__cancel-button">Cancel</a>
            </Link>
            <button
              className="add__save-button"
              type="submit"
            >
              Save
            </button>
          </div>
        </header>
        <div>Form</div>
      </div>
    );
  }
}

export default Add;
