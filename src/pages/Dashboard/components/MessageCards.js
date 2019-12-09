import React from 'react';
import {
  Paper
} from '@material-ui/core'
import { connect } from 'react-redux'
import '../MessageCard.css'


const MessageCards = (props) =>{
  console.log(props);
  let showCards = props.user.messageCards.cards.map( (card) => (
      <Paper key={card._id}>
        <div className="message-wrapper">
            <p className="message">
              { card.message }
            </p>
        </div>
      </Paper>
    )
    
  );

  return (
    <div>
      {showCards}
    </div>
  );
}
  

 
function mapStateToProps(state){
  return { ...state }
}


export default connect(mapStateToProps,null)(MessageCards);