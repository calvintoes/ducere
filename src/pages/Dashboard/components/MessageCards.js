import React from 'react';
import {
  Paper
} from '@material-ui/core'
import { connect } from 'react-redux'
import '../MessageCard.css'


const MessageCards = (props) =>{
  let showCards = props.messageCards.cards.map( (card) => (
      <Paper key={card._id}>
        <div className="message-wrapper">
          <div className="message" >
            <p style={{fontSize: '14px'}}>{ card.message }</p>
          </div>
        </div>
      </Paper>
    )
    
  )
  showCards = showCards.reverse();

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