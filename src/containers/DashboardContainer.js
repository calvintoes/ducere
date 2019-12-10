import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadAllCards from '../Actions/Actions'
import createPostCards from '../Actions/Actions'
import loadStory from '../Actions/Actions'
import Dashboard from '../pages/Dashboard/components/Dashboard'
import fetchUserData from '../Actions/Actions'
import { bindActionCreators } from 'redux'

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillMount(){
    this.props.fetchUserData(this.props.user.token);
  }

  componentDidMount() {
    this.props.loadAllCards(this.props.user.token);
    this.props.loadStory(this.props.user.token);
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
      bindActionCreators(loadAllCards, dispatch),
      bindActionCreators(createPostCards, dispatch),
      bindActionCreators(loadStory, dispatch),
      bindActionCreators(fetchUserData, dispatch)
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);