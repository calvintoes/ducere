import React, { Component } from 'react';
import {
  Container,
  Grid,
  Paper,
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

  render() { 
    return ( 
      <div>
        <NavBar {...this.props} /> 
        
        <Container>
          <div className="story-form-wrapper">
            <Grid>
              <TextField
                id="title-field"
                className="title-field"
                variant="standard"
                label="Title"
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