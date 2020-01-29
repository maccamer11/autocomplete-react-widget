import React, { Component } from 'react';
import './App.css';

import AutoComplete from './components/auto-complete.component';
import countries from './countries';
import foods from './foods';

// includes countries and english words

//will be using class based components for this one
class App extends Component {
  render() {


    return (
      <div className="App">
        <div className='App-Component'>
          <AutoComplete items={countries} />
          <br />
          <AutoComplete items={foods} />
        </div>
      </div>
    );
  }
}

export default App;
