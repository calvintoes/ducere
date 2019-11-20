import React from 'react';
import {
  Container,
  Grid,
  Divider,
} from '@material-ui/core';
import NavBar from '../../partials/NavBar';
import ProfileContent from './ProfileContent'


const Profile = (props) => {
  return ( 
    <div>
      <NavBar {...props}/>
      <ProfileContent {...props} />
    </div>
   );
}
 
export default Profile;