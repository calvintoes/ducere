import React, { Component } from 'react';
import {
  Tab,
  Tabs,
  Typography,
  Box
} from '@material-ui/core'

class VerticalMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: 0,
      setValue: 0
     }
  }


  handleChange = (e, newValue) => {
    this.setState({setValue: newValue})
  }

  render() { 
    return ( 
      <div>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={this.state.value}
          onChange={this.handleChange}
          aria-label="Vertical tabs example"
          
        >
          <Tab label="Stories" {...a11yProps(0)}/>
          <Tab label="Profile" {...a11yProps(1)}/>
          <Tab label="Settings" {...a11yProps(2)}/>
          

        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          Item Three
        </TabPanel>
      </div>
     );
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
 
export default VerticalMenu;