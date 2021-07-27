import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import ee from './EventManager';

import React, { Component } from 'react';
import { Alert } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  componentWillMount() {
    ee.on('infomsg', this.onInfomsg, this);
  }
  componentWillUnmount() {
	 ee.off('infomsg', this.onInfomsg);
  }
  onInfomsg(opts:any) {
    this.setState({infomessage:opts.msg});
  }

  state = {
	  infomessage:''
	}
  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <div className="menu">
            <Link to="/">Home</Link>
          </div>
          {this.state.infomessage !== null && this.state.infomessage !== '' && 
			<Alert color="primary">
			{this.state.infomessage}
			</Alert>}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;