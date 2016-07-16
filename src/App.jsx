import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { Header } from './Header';
import { PostList } from './Posts';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container content">
          <PostList />
        </div>
        <DevTools />
      </div>
    );
  }
};

export default App;
