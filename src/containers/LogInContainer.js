import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from '../pages/LogIn/components/LogIn'
import postAddNewUser from '../Actions/Actions.js'
import loginUser from '../Actions/Actions'
import { bindActionCreators } from 'redux'

class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render(){

    return(
      <LogIn {...this.props} />
    )
  }
}

function mapStateToProps(state){
  return { ...state }
}

function mapDispatchToProps(dispatch) {
    return (
      bindActionCreators(postAddNewUser, dispatch),
      bindActionCreators(loginUser, dispatch)
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
