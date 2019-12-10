import React from 'react';
import {
  Paper,
  Divider
} from '@material-ui/core'
import { connect } from 'react-redux'
import moment from 'moment'
import '../StoryCard.css'


const StoryCards = (props) =>{
  console.log(props);
  let showCards = props.story.stories.map( (card) => (
      <Paper key={card._id} className="story-item">
        <h4>{ card.title }</h4>
        <p>{ card.body }</p>
        <Divider />
        <p className="story-subtitle" style={{float: 'left'}}>{ moment(new Date(card.createdDate)).fromNow() }</p>
        <p className="story-subtitle" style={{float: 'right'}}>By: { props.user.currentUser.username }</p>
      </Paper>
    )
    
  );

  return (
    <div className="story-cards">
      {showCards}
    </div>
  );
}
  

 
function mapStateToProps(state){
  return { ...state }
}


export default connect(mapStateToProps,null)(StoryCards);