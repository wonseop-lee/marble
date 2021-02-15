import React from 'react';
import BottomNav from '../components/bottom-nav';

// export default class NewPost extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       temp = {}
//     };
//   }

//   render() {
//     return (
//       <>
//       </>
//     );
//   }
// }


export default function NewPost() {
  return (
    <>
      <div className="header-container fixed-top width-full pad">
        <header className="container-margin flex-sp-bt">
          <h3>New Post</h3>
          <nav>
            <p>
              <span>SAVE</span>
            </p>
          </nav>
        </header>
      </div>
      <BottomNav />
    </>
  );
}
