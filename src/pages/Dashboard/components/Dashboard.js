import React, { Component } from 'react';
import {
  Container,
  Grid,
  Divider,
} from '@material-ui/core';
import NavBar from '../../partials/NavBar';
import MessageCards from './MessageCards';
import MessageSender from './MessageSender'


import '../Dashboard.css'

class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      messageCards: this.props.messageCards.cards
     }
  }
   
  render() {
    let showPost = this.props.messageCards.cards ? (<MessageCards {...this.props} />) : (<h2 className="no-post-text">No Posts Available</h2>)

    return ( 
      <div>
        <NavBar {...this.props}/>
        
          <Grid container>
            <Grid item xs={10}>
              <MessageSender {...this.props}/>
            </Grid>
            <Grid item xs={2} style={{overflowY: 'scroll'}}>
              <div className="dashboard-wrapper">
                {showPost}
              </div>
            </Grid>
          </Grid>
        
        
        
      </div>
    );
  }
}
 
export default Dashboard;