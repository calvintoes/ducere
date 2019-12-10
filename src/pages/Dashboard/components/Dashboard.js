import React, { Component } from 'react';
import {
  Grid,
  Divider,
  Button
} from '@material-ui/core';
import NavBar from '../../partials/NavBar';
import MessageCards from './MessageCards';
import MessageSender from './MessageSender';
import { Link } from 'react-router-dom'
import StoryCards from './StoryCards';


import '../Dashboard.css'

class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      messageCards: this.props.user.messageCards.cards
     }
  }
   
  render() {
    console.log(this.props)
    console.log(this.state)
    let user = this.props.user;
    let { story } = this.props;
    let showPost = user.messageCards.cards ? (<MessageCards {...this.props} />) : (<h2 className="no-post-text">No Posts Available</h2>);
    let showStories = story.stories ? ( <StoryCards {...this.props} /> ) : (<h2 className="no-story-text">Loading ...</h2>)

    return ( 
      <div>
        <NavBar {...this.props}/>
          
          <Grid container>
            <Grid item xs={10}>
              <h1 className="story-header">Stories</h1>
              <Link to='/stories' id="start-story-wrapper">
                <Button className="start-story" variant="outlined">Start writing</Button>
              </Link>
              {showStories}
              <Divider />
            </Grid>
            <Grid item xs={2}>
              <Grid>
              <div className="dashboard-wrapper">
                {showPost}
              </div>
              </Grid>
              <Grid>
                <MessageSender {...this.props}/>
              </Grid>
            </Grid>
          </Grid>
        
        
        
      </div>
    );
  }
}
 
export default Dashboard;