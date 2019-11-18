import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core'
import '../NavBar.css'

const NavBar = (props) => {
  return ( 
    <div>
      <AppBar position="static">
        <Toolbar>
          <h3 className="menuTitle">Ducere</h3>
          <Button 
            id="menuLogout"
            className="menuLogout"
            color="inherit"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
   );
}
 
export default NavBar;