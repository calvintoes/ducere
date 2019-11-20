import React, { Component } from 'react';
import {
  Paper
} from '@material-ui/core'
import { connect } from 'react-redux'
import '../MessageCard.css'
import { bindActionCreators } from 'redux'
import loadMessageCards from '../../../Actions/Actions'

class MessageCards extends Component {
  constructor(props){
    super(props);
    this.state = {
      messageCards: this.props.messageCards
    }
  }

  componentDidUpdate() {
    this.props.loadMessageCards()
    .then(res => 
      res ? this.setState({messageCards: res.payload}) : null
    );
  }

  render() {
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
    
    return (
      <div>{showCards}</div>
        
    );
  }
  
}
 
function mapStateToProps(state){
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(loadMessageCards, dispatch)
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageCards);