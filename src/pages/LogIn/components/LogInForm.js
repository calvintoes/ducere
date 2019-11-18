import React, { Component } from 'react';
import {
  Box,
  Container,
  Grid,
  Button,
  TextField,
  FormGroup,
  FormLabel
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import '../LogInForm.css'

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {
        username: '',
        password: '',
      },
      
      serverResponse: ''
     }
  }

  validateForm = () => {
    return this.state.user.username.length > 0 && this.state.user.password.length > 0;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      ...this.state.user,
      token: this.props.token
    }

    this.props.loginUser(data)
    .then(res => {
      console.log("RES", res)
      res.payload.error || res.payload.message ? this.setState({serverResponse: this.props.user.message }) : this.setState({serverResponse: this.props.user.error || this.props.error})
    })

  }

  render() { 
    let btnText = this.props.logIn ? "Create Account" : "Log in";
    let user = { ...this.state.user }
    console.log(this.props)
    console.log("state", this.state)
    if (this.state.serverResponse === 'success') {
      console.log("REDIRECT")
      return <Redirect to='/dashboard' />
    }
    return ( 
      <div className="Login">
        <Container >
          <img src="/assets/user.svg" alt="logo" width="100px" />
          <h1>Welcome Back</h1>
          <h3 style={{color: "red"}}>{this.state.serverResponse}</h3>
        </Container>
        
        <form onSubmit={this.handleSubmit} >
          <Container>
            <FormGroup>
              <TextField
                required
                id="username"
                className="username"
                label="Username"
                value={this.state.user.username}
                type="text"
                variant="outlined"
                onChange={(e) => this.setState({ user: {...user, username: e.target.value } })}
              />
              <TextField
                required
                id="password"
                className="password"
                label="Password"
                value={this.state.user.password}
                type="password"
                variant="outlined"
                onChange={(e) =>this.setState({ user: {...user, password: e.target.value } })}
              />
              <Button
                id="submitBtn"
                disabled={!this.validateForm}
                type="submit"
                variant="contained"
              >
              {btnText}
              </Button>  
            </FormGroup>
          </Container>
        </form>
      </div>
     );
  }
}
 
export default LogInForm;