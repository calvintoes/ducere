import React from 'react';
import { connect } from 'react-redux'
import LogInForm from './LogInForm.js';
import SignUpForm from './SignUpForm.js'
import {
  Box,
  Grid
} from '@material-ui/core'
import '../LogIn.css'

const LogIn = (props) => {


  return ( 
    <Box className="wrapper" style={{backgroundImage:"url('/assets/images/bg-01.jpg')"}}>
      <Grid container>
        <div className="Login-wrapper">
        <Grid item >
          <LogInForm />
        </Grid>
        <div className="newAccount-wrapper">
          <a className="newAccount" id="newAccount" href="#">Create An Account</a>
        </div>
        </div>
      </Grid>
    </Box>
    
   );
}

function mapStateToProps(state){

}

 
// export default connect(mapStateToProps)(LogIn);
export default LogIn;