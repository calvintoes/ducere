import React from 'react';
import {
  Container,
  Grid,
  Divider,
} from '@material-ui/core';
import NavBar from '../../partials/NavBar';
import MessageCards from './MessageCards';
import MessageSender from './MessageSender'


import '../Dashboard.css'

const Dashboard = (props) => {
  let showPost;

  // if (props.messageCards.cards) {
  //   if (props.messageCards.cards.length === 0) {
  //     showPost = ( <h2 className="no-post-text">No Posts Available</h2> )
  //   } else {
  //     let cards = props.messageCards.cards;
  //     showPost = cards.map((card) => (<MessageCards text={card.message} key={card._id} />))
  //   }
  // } else {
  //   showPost = ( <h2 className="no-post-text">No Posts Available</h2> )
      
  // }

  showPost = props.messageCards.cards ? (<MessageCards/>) : (<h2 className="no-post-text">No Posts Available</h2>)

  return ( 
    <div>
      <NavBar {...props}/>
      
        <Grid container>
          <Grid item xs={3}>
            <MessageSender {...props}/>
          </Grid>
          <Grid item xs={9}>
            <div className="dashboard-wrapper">
              {showPost}
            </div>
          </Grid>
        </Grid>
       
      
      
    </div>
   );
}
 
export default Dashboard;