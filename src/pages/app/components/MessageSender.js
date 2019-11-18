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
      text: ''
     }
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
            style={{width: '75%'}}
          />
          <Button
            id="sendBtn"
            className="sendBtn"
            variant="contained"
            color="primary"       
          >
            Send
          </Button>
        </div>
      </Container>
      );
  }
}
 
export default MessageSender;