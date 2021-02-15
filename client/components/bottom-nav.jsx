import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function BottomNav(props) {
  return (
    <div className="footer-container fixed-btm width-full pad">
      <nav className="container-margin btm-nav">
        <a href={`#home`}>
          <Icon.House />
        </a>
        <a href={`#search`}>
          <Icon.Search />
        </a>
        <a href={`#profile`}>
          <Icon.PersonSquare />
        </a>
      </nav>
    </div>
  );
};
