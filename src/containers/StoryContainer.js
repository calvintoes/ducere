import React, { Component } from 'react';
import { connect } from 'react-redux'
import Story from '../pages/Story/Story.js';
import { bindActionCreators } from 'redux';
import postStory from '../Actions/Actions';
import loadStory from '../Actions/Actions';
import deleteStory from '../Actions/Actions';

class StoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }


  render() { 
    return ( 
      <Story {...this.props} />
     );
  }
}


function mapStateToProps(state){
  return { ...state }
}

function mapDispatchToProps(dispatch) {
    return (
      bindActionCreators(postStory, dispatch),
      bindActionCreators(loadStory, dispatch),
      bindActionCreators(deleteStory, dispatch)
    )
}

 
export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);