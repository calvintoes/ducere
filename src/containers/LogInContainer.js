import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from '../pages/LogIn/components/LogIn'
import postAddNewUser from '../Actions/Actions.js'
import { bindActionCreators } from 'redux'

class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.state = {}
    // this.props.postAddNewUser = postAddNewUser(this.props)
  }




  render(){

    return(
      <LogIn {...this.props} />
    )
  }
}

function mapStateToProps(state){
  let { store } = state;

  return {
      ...store
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      postAddNewUser
    }, dispatch)}


export default connect(mapDispatchToProps, mapStateToProps)(LoginContainer)
