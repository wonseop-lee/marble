import React from 'react';
import BottomNav from '../components/bottom-nav';

export default class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // adds new post to the endpoint
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/api/uploads', {
      method: 'POST',
      body: formData
    })
    .then(res => res.text()) // change to res.json() after debugging
    .then(result => {
      console.log("Response body:", result);
    })
    .catch(err => {
      console.error('Error:', err);
    })
    // reset();
  }

  render() {
    return (
      <>
        <div className="header-container fixed-top width-full pad">
          <header className="container-margin flex-sp-bt">
            <h3>New Post</h3>
          </header>
        </div>
        <div className="body-container">
          <h3>Choose an image file for new post</h3>
          <form onSubmit={this.handleSubmit} className="form">
            <div className="mar-btm-med">
              <input required type="file" name='image'
                     accept=".jpg, .jpeg, .png" className="input-file"/>
            </div>
            <div className="cap-con mar-btm-med">
              <label className="label-cap mar-btm-ltl"
                     htmlFor="caption">Caption</label>
              <input required id="caption" type="text"
                     name="caption" placeholder="caption here"
                     className="input-cap width-full"/>
            </div>
            <div className="sub-btn-con">
              <button className="sub-btn">Post</button>
            </div>
          </form>
        </div>
        <BottomNav />
      </>
    );
  }
}
