import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function Header() {
  return (
    <div className="header-container fixed-top width-full pad">
      <header className="container-margin flex-sp-bt">
        <h3>Marble</h3>
        <nav>
          <a href={`#newpost`} className="mar-right">
            <Icon.PlusSquare />
          </a>
          <a href={`#notification`} className="icon-notif">
            <Icon.Bell />
          </a>
        </nav>
      </header>
    </div>
  )
}
