import React, { Component } from 'react';
import {
  Paper
} from '@material-ui/core'

class MessageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: '',
      owner: ''
     }
  }
  render() { 

    return ( 
      <Paper>
        <div className="message-wrapper">
          { this.state.message }
        </div>
      </Paper>
     );
  }
}
 
export default MessageCard;