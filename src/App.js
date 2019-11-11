import React from 'react';
import './App.css';
import LoginContainer from './containers/LogInContainer'
import { connect } from 'reac-redux'

function App() {

  return (
    <div className="App">
     <LoginContainer />
    </div>
  );
}

export default connect()(App);
