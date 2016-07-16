import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Header } from './Header';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DevTools />
      </div>
    );
  }
};

export default App;
