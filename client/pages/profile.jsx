import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import BottomNav from '../components/bottom-nav';
import Header from '../components/header'


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
    this.handlePostTypes = this.handlePostTypes.bind(this);
  }

  componentDidMount() {
    fetch(`/api/user/1`)
      .then(res => res.json())
      .then(user => {console.log(user); return this.setState({ user })});
  }

  handlePostTypes() {
    console.log("Grid or Saved");
  }

  render() {
    let tempUrl = ''; //replace this section after authentication
    let tempName = '';
    if (this.state.user[0]) {
      tempUrl = this.state.user[0].profilePicUrl;
      tempName = this.state.user[0].poster;
    };

    return (
      <>
        <Header />
        <div className="fixed-mid">
          <div className="prof-pic">
            <User user={tempUrl}/>
            <h3>{tempName}</h3>
          </div>
          <div className="layout-bar">
            <span><Icon.Grid3x3 onClick={this.handlePostTypes} /></span>
            <span><Icon.Bookmark onClick={this.handlePostTypes} /></span>
          </div>
        </div>
        <div className="grid">
          {
            this.state.user.map(user => (
              <div key={user.postId} className="thumb-container">
                <GridFill user={user} />
              </div>
            ))
          }
        </div>
        <BottomNav />
      </>
    );
  }
}

function GridFill(props) {
  const {postId, imageUrl} = props.user;
  return (
    <img src={imageUrl} alt=""/>
  );
}

function User(props) {

  return (
    <img className="circle" src={props.user} alt="profile picture" />
  );
}
