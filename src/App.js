import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LogInContainer'
import { connect } from 'react-redux'
import fetchToken from './Actions/Actions.js'
import { bindActionCreators } from 'redux'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        _csrf: ''
       }
       this.props.fetchToken = fetchToken()
    }

  componentDidMount(){
    this.setState({_csrf: this.props.fetchToken()})
    console.log(this.state)
  }
  
  render(){

  
    return (
      <div className="App">
      <LoginContainer {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  const { store } = state
  return {
      fetchToken: store.fetchToken
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchToken
  }, dispatch)}



export default connect(mapStateToProps, mapDispatchToProps)(App);
