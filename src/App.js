import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LogInContainer'
import { connect } from 'react-redux'
import fetchToken from './Actions/Actions.js'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { PrivateRoute } from './helpers/PrivateRoute'
import { bindActionCreators } from 'redux'
import DashboardContainer from './containers/DashboardContainer';
import ProfileContainer from './containers/ProfileContainer'
import AboutContainer from './containers/AboutContainer';
import notFound from './pages/notFound'

class App extends Component {

  componentDidMount(){
   this.props.fetchToken()
   
  }
  
  render(){
    return (
      <Router>
        <Switch> 
          <Route exact path="/" component={LoginContainer}  />
          <PrivateRoute path="/dashboard" component={DashboardContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <PrivateRoute path="/about" component={AboutContainer} />
          <Route path="/*" component={notFound} />
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
