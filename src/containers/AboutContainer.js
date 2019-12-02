import React, { Component } from 'react';
import { connect } from 'react-redux';
import About from '../pages/About/About'

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <About {...this.props} />
     );
  }
}
 

function mapStateToProps(state){
  return { ...state }
}



export default connect(mapStateToProps, null) (AboutContainer)