import React, { Component } from 'react';
import {
  Paper
} from '@material-ui/core'
import { connect } from 'react-redux'
import '../MessageCard.css'


class MessageCards extends Component {
  constructor(props){
    super(props);
    this.state = {
      messageCards: this.props.messageCards
    }
  }

  componentDidUpdate() {
    
  }

  render() {
    this.props.loadAllCards(this.props.token)
    .then(res => 
      res ? this.setState({messageCards: res.payload}) : null
    );
    
    let showCards = this.state.messageCards.cards.map( (card) => (
        <Paper key={card._id}>
          <div className="message-wrapper">
            <div className="message" >
              { card.message }
            </div>
          </div>
        </Paper>
      )
     
    )
    showCards = showCards.reverse();
    return (
      <div>{showCards}</div>
        
    );
  }
  
}
 
function mapStateToProps(state){
  return { ...state }
}


export default connect(mapStateToProps,null)(MessageCards);