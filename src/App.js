import React, { Component } from 'react';

import './index.css';
import Logo from './components/Logo';
import Teks from './components/Teks';

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Logo />
        <Teks />
      </div>
    );
  }
}

export default App;
