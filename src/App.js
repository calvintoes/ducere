import React from 'react';
import './App.css';
import LoginContainer from './containers/LogInContainer'
import { connect } from 'react-redux'

const App = () => {

  return (
    <div className="App">
     <LoginContainer />
    </div>
  );
}

export default App;
