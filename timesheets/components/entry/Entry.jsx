import React from 'react';

import './entry.scss';

class Entry extends React.Component {
  render() {
    return (
      <div className="entry">
        <div className="entry__name">Port of Rotterdam</div>
        <div className="entry__time">
          <div className="entry__hours">09:00 - 17:00</div>
          <div className="entry__duration">08:00</div>
        </div>
      </div>
    );
  }
}

export default Entry;
