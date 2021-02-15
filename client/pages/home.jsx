import React from 'react';
import BottomNav from '../components/bottom-nav';
import Header from '../components/header'
import * as Icon from 'react-bootstrap-icons';
// import Posts from './posts';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    return (
      <>
        <Header />
        <>
          {this.state.posts.map(post => (
            <div key={post.postId} className="container-margin mar-btm mar-btm-ltl">
              <Post post={post}/>
            </div>
          ))
          }
        </>
        <BottomNav/>
      </>
    )
  }
}

function Post(props) {
  const { postId, description, imageUrl, poster } = props.post;
  return (
    <>
      <div className="top mar-btm-ltl">
        <a href={`#profile`} className="mar-right">
          <span>
            {poster}
          </span>
        </a>
        <span onClick={handleFollow}>Follow</span>
      </div>
      <div className="img mar-btm-ltl">
        <img src={imageUrl} alt="user image" />
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
        <p>Liked by <span>otherAccount_placeholder</span></p>
        <p>{description}</p>
        <p>Comment</p>
        <p>12 hours ago</p>
      </div>
    </>
  );
}

function handleFollow() {
  console.log('Followed');
}

function handleLike() {
  console.log("Liked");
}

function handleSave() {
  console.log("Saved");
}
