import React from 'react';
import {
  Container,
} from '@material-ui/core'
import Nav from '../partials/NavBar'
import './about.css'

const About = (props) => {
  return ( 
    <div>
    <Nav {...props}/>
    <Container>
      <div className="team-wrapper">
        <img id="team-photo" src="/assets/images/about.jpg" alt="team" width="800px"/>
      </div>
      <h1>Ducere</h1>
      <h3>Mission Statement:</h3> 
      <p>
        To empower people to be the best of version of themselves by providing a community with trust, knowledge, and honesty
      </p>
      <br/>
      <p>Founded in twenty-nineteen</p>
      <br/>

    </Container>
    </div>
   );
}
 
export default About;