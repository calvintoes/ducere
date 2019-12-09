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
import auth from '../../../helpers/auth'

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
      token: this.props.user.token
    }

    this.props.loginUser(data)
    .then(res => {
      res.payload.error ? this.setState({serverResponse: this.props.user.login.error || this.props.user.error}) : auth.login( () => {
        this.props.history.push('/dashboard')
      });
    })

  }

  render() { 
    let btnText = this.props.logIn ? "Create Account" : "Log in";
    let user = { ...this.state.user }
 
    if (this.state.serverResponse === "LOGIN_SUCCESS") {
      return <Redirect to='/dashboard' />
    }
    return ( 
      <div className="Login">
        <Container >
          <img src="/assets/user.svg" alt="logo" width="100px" id="avatar-logo"/>
          <h1 style={{textAlign: 'center'}}>Welcome Back</h1>
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