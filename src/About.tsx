
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ee from './EventManager';

class About extends Component {
  componentWillMount() {
  }
  componentDidMount() {
	 
  }
  
  render() {
    return (

      <div>
        <button onClick={() => {ee.emit('infomsg',{msg:'test'})}}>Test</button>
		<Button color="danger">Danger!</Button>
      </div>
    )
  }
  
}

export default About;