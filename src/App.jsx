import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Header } from './Header';
import { PostList } from './Posts';

@observer
class App extends Component {
  render() {
    const { appState } = this.props;
    return (
      <div>
        <Header />
        <div className="container content">
          <PostList appState={appState} />
        </div>
        <DevTools />
      </div>
    );
  }
};

export default App;
