import React from 'react';
import {
  Container,
  Grid,
  Divider,
  TextField,
  Button,
} from '@material-ui/core';
import NavBar from './NavBar';
import MessageCard from './MessageCard';
import MessageSender from './MessageSender'


import '../Dashboard.css'

const Dashboard = (props) => {
  let showPost;
  if (!props.messageCards.length > 0) {
    showPost = ( <h2 className="no-post-text">No Posts Available</h2> )
  } else {
    showPost = (<MessageCard />)
  }

  return ( 
    <div>
      <NavBar />
      <Container >
        <div className="dashboard-wrapper">
          {showPost}
        </div>
      </Container>
      <Divider variant="middle" id="divider"/>
      <MessageSender />
    </div>
   );
}
 
export default Dashboard;