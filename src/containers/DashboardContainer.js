import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadMessageCards from '../Actions/Actions'
import createPostCards from '../Actions/Actions'
import Dashboard from '../pages/Dashboard/components/Dashboard'
import { bindActionCreators } from 'redux'

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.props.loadMessageCards();
  }


  render() { 
    return ( 
      <Dashboard {...this.props}/>
     );
  }
}
 

function mapStateToProps(state){
  return { ...state }
}

function mapDispatchToProps(dispatch) {
    return (
      bindActionCreators(loadMessageCards, dispatch),
      bindActionCreators(createPostCards, dispatch)
    )
}


export default connect(mapStateToProps, mapDispatchToProps) (DashboardContainer);