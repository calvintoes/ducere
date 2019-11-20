import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchUserData from '../Actions/Actions'
import setNewPassword from '../Actions/Actions'
import Profile from '../pages/Profile/components/Profile'

import { bindActionCreators } from 'redux'

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <Profile {...this.props} />
     );
  }
}
 

function mapStateToProps(state){
  return { ...state }
}

function mapDispatchToProps(dispatch) {
    return (
      bindActionCreators(fetchUserData, dispatch),
      bindActionCreators(setNewPassword, dispatch)
      
    )
}


export default connect(mapStateToProps, mapDispatchToProps) (ProfileContainer);