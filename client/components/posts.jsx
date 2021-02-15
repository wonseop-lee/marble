import React from 'react';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.handleComment = this.handleComment.bind(this);
    this.logTimeStamp = this.logTimeStamp.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.accountName = '';
  }

  handleComment() {

  }

  logTimeStamp() {

  }

  handleFollow() {

  }

  render() {
    <div className="container-margin margin-btm">
      <div className="top margin-btm-ltl">
        <a href={`#profile`} className="mar-right">
          <span>
            {this.accountName}
          </span>
        </a>
        <span onClick={handleFollow}>Follow</span>
      </div>
      <div className="img margin-btm-ltl">
        <img src="../img/logo.png" alt="user image" />
      </div>
      <div className="icon-row">
        <span className="heart"><Icon.Heart onClick={handleLike} /></span>
        <a href={`#comment`} className="comment">
          <Icon.ChatRightDots />
        </a>
        {/* <span>carousel</span> */}
        <span className="save"><Icon.Bookmark onClick={handleSave} /></span>
      </div>
      <div className="content-description">
        <p>Liked by <span>{this.accountName}</span></p>
        <p>Placeholder caption</p>
        <p>{this.handleComment}Comment</p>
        <p>{this.logTimeStamp}12 hours ago</p>
      </div>
    </div>
  }
}
