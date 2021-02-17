import React from 'react';
import BottomNav from '../components/bottom-nav';
import Header from '../components/header'
import * as Icon from 'react-bootstrap-icons';
// import Posts from './posts';

// To render home screen
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      modalClicked: false
    };
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json()) // delete below upon completion
      .then(posts => {console.log(posts); return this.setState({ posts });})
  }

  // to display modal window
  handleModal() {
    if (!this.modalClicked) {
      this.setState({modalClicked: true});
    } else {
      this.setState({modalClicked: false});
    }
  }

  render() {
    const {modalClicked} = this.state;
    return (
      <>
        <Header />
        <>
          {
            this.state.posts.map(post => (
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

// to render individual post within home page
function Post(props) {
  const { postId, description, imageUrl, poster, profilePicUrl } = props.post;
  return (
    <>
      <div className="top mar-btm-ltl">
        <a href={`#profile`} className="mar-right">
          <div className="mini-pic">
            <img className="circle" src={profilePicUrl} alt=""/>
          </div>
          <span>
            {poster}
          </span>
        </a>
        <span onClick={handleFollow}>Follow</span>
        {/* <Icon.List onClick={handleModal}/> */}
      </div>
      <div className="img mar-btm-ltl">
        <img src={imageUrl} alt="user image" />
      </div>
      <div className="icon-row">
        <span className="heart"><Icon.Heart onClick={handleLike} /></span>
        <a href={`#comment`} className="comment">
          <Icon.ChatRightDots />
        </a>
        <span className="save"><Icon.Bookmark onClick={handleSave} /></span>
      </div>
      <div className="content-description">
        <p>Liked by <span>otherAccount_placeholder</span></p>
        <p><span>{poster}</span>{" "}{description}</p>
        <p>otherAccount comment_placeholder</p>
        <p>12 hours ago</p>
      </div>
      {/* <div className={`${this.modalClicked ? "" : "hidden"}`}>
        <button onClick={handleDelete}>DELETE</button>
        <button>CANCEL</button>
      </div> */}
    </>
  );
}
function handleDelete() {
  console.log('Delete');
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
