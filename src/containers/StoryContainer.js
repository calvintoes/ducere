import React, { Component } from 'react';
import { connect } from 'react-redux'
import Story from '../pages/Story/Story.js';

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
      {}
    )
}

 
export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);