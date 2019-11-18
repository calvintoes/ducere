import React, { Component } from 'react';
import {
  Container,
  Button,
  TextField,
  FormGroup,
} from '@material-ui/core'
import '../LogInForm.css'

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user:{
        username: '',
        password: '',
        password2: '',
      },
     
      serverResponse: ''
     }
     
  }

  validateForm = () => {
    return this.state.user.username.length > 0 && this.state.user.password.length > 0 && this.state.user.password === this.state.user.password2;
  }

  handleSubmit = (e) => {
    console.log("...submitting")
    e.preventDefault()
    let data = { 
      ...this.state.user, 
    }
  
    this.props.postAddNewUser(data, this.props.token)
    .then(res => {
    
      res.error || res.message ? this.setState({serverResponse: this.props.user.message }) : this.setState({serverResponse: this.props.user.error || this.props.error})
    })
  }

  render() { 
    let btnText = this.props.logIn ?  "Create Account" : "Log in";
    let user = { ...this.state.user };
    let validateForm = this.validateForm();
    // console.log("state", this.state);
    return ( 
      <div className="Login">
        <Container >
          <img src="/assets/user.svg" alt="logo" width="100px" />
          <h1>Welcome To Ducere</h1>
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
              onChange={(e) => this.setState({user: {...user, password: e.target.value } })}
            />
            <TextField
              required
              id="password2"
              className="password2"
              label="Retype Password"
              value={this.state.user.password2}
              type="password"
              variant="outlined"
              onChange={(e) => this.setState({user: {...user, password2: e.target.value }})}
            />
            <Button
              id="submitBtn"
              disabled={!validateForm}
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
export default SignUpForm;