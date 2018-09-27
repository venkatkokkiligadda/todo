import React, { Component } from 'react';
import NavBar from './NavBar'

import router from '../router';

class App extends Component {
  render() {
    return (
     <div>
	  <NavBar />	  
      <div id="App__container">
        { router }
      </div>
	  </div>
    );
  }
}

export default App;
