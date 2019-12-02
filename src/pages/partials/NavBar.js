import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import './NavBar.css'
import auth from '../../helpers/auth'

const NavBar = (props) => {

  const logout = () => { 
   fetch('/logout')
   .then(auth.logout( () => {
    props.history.push('/')
   }))
  }

  return ( 
    <AppBar position="static">
      <Toolbar>
        <h3 className="menu-title">Ducere</h3>
        <Link to='/dashboard' id="profile-link">
        <Button 
          id="menu-profile"
          className="menu-profile"
          color="inherit"
        >
          Dashboard
        </Button>
        </Link>
        <Link to='/profile' id="profile-link">
        <Button 
          id="menu-profile"
          className="menu-profile"
          color="inherit"
        >
          Profile
        </Button>
        </Link>
        <Link to="/about" id="profile-link" >
        <Button 
          id="menu-about"
          className="menu-about"
          color="inherit"
        >
          About
        </Button>
        </Link>
        <Link to="/" id="profile-link" onClick={logout}>
        <Button 
          id="menu-logout"
          className="menu-logout"
          color="inherit"
        >
          Logout
        </Button>
        </Link>
      </Toolbar>
    </AppBar>
   );
}
 
export default NavBar;