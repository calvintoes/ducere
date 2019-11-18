import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LogInContainer'
import { connect } from 'react-redux'
import fetchToken from './Actions/Actions.js'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { PrivateRoute } from './helpers/PrivateRoute'
import { bindActionCreators } from 'redux'
import DashboardContainer from './containers/DashboardContainer';

class App extends Component {

  componentDidMount(){
   this.props.fetchToken()
   .then( res => localStorage.setItem('token', res.payload.csrfToken))
    
  }
  
  render(){
    console.log(this.props)  
    return (
      <Router>
        <Switch>
          
          <Route exact path="/" component={LoginContainer}  />
          <Route path="/dashboard" component={DashboardContainer} />
          {/* <PrivateRoute path="/profile" component={ProfileContainer} /> */}
          
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
      ...state
  }
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(fetchToken, dispatch)
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
