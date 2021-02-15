import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import BottomNav from '../components/bottom-nav';
import GridFill from '../components/grid-fill';
import Header from '../components/header'


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.handlePostTypes = this.handlePostTypes.bind(this);
  }

  handlePostTypes() {
    console.log("Grid or Saved");
  }

  render() {
    return (
      <>
        <Header />
        <div className="prof-pic">
          <img src="" alt="profile picture"/>
        </div>
        <div className="layout-bar">
          <Icon.Grid3x3 onClick={this.handlePostTypes}/>
          <Icon.Bookmark onClick={this.handlePostTypes}/>
        </div>
        <GridFill />
        <BottomNav />
      </>
    );
  }
}
