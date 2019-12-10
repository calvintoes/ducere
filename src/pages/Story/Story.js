import React, { Component } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import NavBar from '../partials/NavBar';
import './Story.css'


class Story extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      body: '',
      serverResponse: '',
     }
  }

  goBack = () => {
    this.props.history.goBack()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: this.state.title,
      body: this.state.body,
    }

    this.props.postStory(data, this.props.user.token)
    .then(res => {
      this.setState({serverResponse: res.payload.message})
    })
    
    if (this.state.serverResponse){
      setTimeout(this.props.history.push('/dashboard'), 1500)
    }
    
  }

  render() { 
  
    return ( 
      <div>
        <NavBar {...this.props} /> 
        
        <Container>
          <h1 className="story-title">Write Your Story</h1>
          <div className="story-form-wrapper">
            <Grid>
              <TextField
                id="title-field"
                className="title-field"
                variant="standard"
                placeholder="Untitled"
                required
                onChange={(e) => this.setState({title: e.target.value})}
                value={this.state.title}
                fullWidth
              />
            </Grid>
            <Grid>
              <div className="story-body-wrapper">
                <TextField
                    id="body-field"
                    className="body-field"
                    variant="outlined"
                    placeholder=" Today was a great day ... "
                    onChange={(e) => this.setState({body: e.target.value})}
                    value={this.state.body}
                    multiline
                    fullWidth
                  />
                </div>
            </Grid>
            <Grid>
              <div className="story-btn-wrapper">
                <Button
                  id="story-cancel-btn"
                  className="story-cancel-btn"
                  variant="text"
                  size="small"
                  onClick={this.goBack}
                >
                  Cancel
                </Button>
                <Button
                  id="story-submit-btn"
                  className="story-submit-btn"
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </div>
        </Container>
      </div>
     );
  }
}
 
export default Story;