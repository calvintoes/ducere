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
import '../LogInForm.css'

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      password2: ''
     }
  }
  validateForm = () => {
    return this.state.username.length > 0 && this.state.password.length > 0 && this.state.password === this.state.password2;
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() { 
    return ( 
      <div className="Login">
        <img src="/assets/user.svg" alt="logo" width="100px" />
        <h1>Welcome To Ducere</h1>
      <form onSubmit={this.handleSubmit} >
        <Container>
          <FormGroup>
            <TextField
              required
              id="username"
              className="username"
              label="Username"
              value={this.state.username}
              type="text"
              variant="outlined"
              onChange={(e) => this.setState({username: e.target.value})}
            />
            <TextField
              required
              id="password"
              className="password"
              label="Password"
              value={this.state.password}
              type="password"
              variant="outlined"
              onChange={(e) => this.setState({password: e.target.value})}
            />
            <TextField
              required
              id="password2"
              className="password2"
              label="Retype Password"
              value={this.state.password2}
              type="password"
              variant="outlined"
              onChange={(e) => this.setState({password2: e.target.value})}
            />
            <Button
              id="submitBtn"
              disabled={!this.validateForm}
              type="submit"
              variant="contained"
            >
            Log In
            </Button>  
          </FormGroup>
        </Container>
      </form>
      </div>
     );
  }
}
export default SignUpForm;