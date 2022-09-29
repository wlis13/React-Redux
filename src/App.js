import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import './style.css';

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <aside className="container">
          <Player />
          <Sidebar />
        </aside>

      </>
    );
  }
}

export default App;
