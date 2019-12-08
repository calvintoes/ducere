import React, { Component } from 'react';
import {
  Container,
  TextField,
  Button
} from '@material-ui/core'
import '../MessageSender.scss'


class MessageSender extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: '',
      serverResponse: ''
     }
  }

  handleSend = (e) => {
    e.preventDefault()
    let msgCards = this.props.messageCards

    let data = { 
      message: this.state.message, 
      token: this.props.token
    };
    
    this.props.createPostCards(data);

    if (msgCards.cards.length !== 0) this.props.loadAllCards(this.props.token).then( 
      this.setState({message: ''})
    );
  }
  
  render() { 
    return (
      <Container>
        <div className="send-container">
          <TextField
            id="sendMessage"
            className="sendMessage"
            variant="filled"
            label="Send message ..."
            style={{width: '100%'}}
            onChange={(e) => this.setState({message: e.target.value})}
            value={this.state.message}
          />
          <Button
            id="sendBtn"
            className="sendBtn"
            variant="contained"
            color="primary"
            onClick={this.handleSend}       
          >
            Send
          </Button>
        </div>
      </Container>
      );
  }
}
 
export default MessageSender;