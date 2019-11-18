import React, { Component } from 'react';
import { connect } from 'react-redux'
import LogInForm from './LogInForm.js';
import SignUpForm from './SignUpForm.js'
import {
  Box,
  Grid
} from '@material-ui/core'
import '../LogIn.css'

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      signUp: false,
      logIn: true,
      csrf: ''
     }
  }

  handleFormSwitch = (e) => {
    e.preventDefault();
    let signUp = !this.state.signUp;
    let logIn = !this.state.logIn;

    this.setState({
      signUp,
      logIn
    });
  }


  render() { 
    let showText =  this.state.signUp ? "Create An Account" : "Have an Account? Log in"
    let showForm = this.state.signUp ? (
      <LogInForm {...this.props} signUp={this.state.signUp} logIn={this.state.logIn}/>
      ) : (
      <SignUpForm {...this.props} signUp={this.state.signUp} logIn={this.state.logIn}/>
      )

    return ( 
      <Box className="wrapper" style={{backgroundImage:"url('/assets/images/bg-01.jpg')"}}>
      <Grid container>
        <div className="Login-wrapper">
        <Grid item >
          {showForm}
        </Grid>
        <div className="newAccount-wrapper">
          <a className="newAccount" id="newAccount" onClick={this.handleFormSwitch}>
           {showText}
          </a>
        </div>
        </div>
      </Grid>
    </Box>
     );
  }
}


function mapStateToProps(state){
  let { store } = state;

  return {
      ...store
  }
}

 
// export default connect(mapStateToProps)(LogIn);
export default connect(mapStateToProps)(LogIn);