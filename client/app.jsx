import React from 'react';
import parseRoute from './lib/parse-route';
import Home from './pages/home';
import Profile from './pages/profile';
import * as Icon from 'react-bootstrap-icons';
import NotFound from './pages/not-found';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const route = parseRoute(window.location.hash);
      this.setState({route});
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'home') {
      return <Home />;
    }
    if (route.path === 'profile') {
      return <Profile />;
    }
    // if (route.path === 'posts') {
    //   return <Posts />;
    // }
    // if (route.path === 'newpost') {
    //   return <NewPost />;
    // }
    // if (route.path === 'notifications') {
    //   return <Notif />;
    // }
    // if (route.path === 'comment') {
    //   return <Comments />;
    // }
    return <NotFound />;
  }

  render() {
    return (
      <>
        <div className='container'>
          { this.renderPage() }
        </div>
      </>
    )
  }
}
