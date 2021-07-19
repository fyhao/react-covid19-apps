
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

      <div>test about 22
        <button onClick={() => {ee.emit('infomsg',{msg:'test'})}}>Test</button>
		<Button color="danger">Danger!</Button>
      </div>
    )
  }
  
}

export default About;