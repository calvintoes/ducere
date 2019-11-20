import React, { Component } from 'react';
import {
  Container,
  Grid,
  Divider,
  Button,
  TextField
} from '@material-ui/core';
import '../ProfileContent.css'

class ProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {
        username: '',
        id: null,
        name: '',
        memberSince: '',
        birthday: Date,
        gender: '',
      },
      showPwdFields: false,
      currentPassword:'',
      newPassword:'',
      newPassword2:'',
      serverResponse: ''
     }
  }
  
  componentDidMount(){
    let token =  { token: this.props.token }
    this.props.fetchUserData(token)
    .then(res => 
        this.setState({
          user: {
            ...this.state.user, 
            username: res.payload.docs.username,
            memberSince: this.handleDateConvert(res.payload.docs.createdDate),
          }
        }
    ));
      
  }

  validatePwd = () => {
    return this.state.newPassword.length === this.state.newPassword2
  }

  handleDateConvert = (date) => {
    let monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"]
    let d = new Date(date);
    let month, day, year;
    month = monthNames[d.getUTCMonth() + 1];
    day = d.getDate();
    year = d.getUTCFullYear();

    return `${month} ${day}, ${year}`
  }

  toggleChangePwdFields = () => {
    let showFields = this.state.showPwdFields; 
    showFields = !showFields

    this.setState({
      showPwdFields: showFields
    })
  }

  changePasswords = () => {
    let data = {
      currentPassword: this.state.currentPassword,
      newPass: this.state.newPassword,
      newPass2: this.state.newPassword2,
      token: this.props.token
    }
    this.props.setNewPassword(data)
    .then(res => res.payload.error ? this.setState({serverResponse: res.payload.error }) : this.setState({serverResponse: res.payload.message }))
    .then(this.setState({showPwdFields: false}))

  }

  handlePwdSubmit = () => {
    this.changePasswords()

  }

  render() {
    
    let user = this.state.user;
    let showPwdFields = this.state.showPwdFields ? (
      <div className="pwd-change-wrapper">
        <TextField
          id="curr-password"
          className="curr-password"
          placeholder="Current Password"
          variant="filled"
          onChange={e => this.setState({currentPassword: e.target.value})}
        />
        <div className="text-field-wrapper">
          <TextField
            id="new-password"
            className="new-password"
            placeholder="New Password"
            variant="filled"
            onChange={e => this.setState({newPassword: e.target.value})}
          />
        </div>
        <div className="text-field-wrapper">
          <TextField
            id="new-password2"
            className="new-password2"
            placeholder="Retype Password"
            variant="filled"
            onChange={e => this.setState({newPassword2: e.target.value})}
          />    
        </div>
        <Button
          id="pwd-submit-btn"
          variant="contained"
          size="small"
          onClick={this.handlePwdSubmit}
          disabled={!this.validatePwd}
          color="primary"
        >
          Submit
        </Button>
      </div>
    ) : null

    return ( 
      <Container>
        <h1>Welcome { user.username }</h1>
        <Divider/>
        <h2> Member Since: </h2>
        <p>{user.memberSince}</p>
        <Divider />
        {showPwdFields}
        <p style={{color: 'red'}}>{this.state.serverResponse}</p>
        <Button
          id="pwd-change-btn"
          className="pwd-change-btn"
          variant="contained" 
          onClick={this.toggleChangePwdFields}
          disabled={this.state.showPwdFields}
          style={{margin: '2em 0', display: 'block'}}
        >
          Change Password
        </Button>
      </Container>
      
     );
  }
}
 
export default ProfileContent;