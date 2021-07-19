import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import External from './External';
import ee from './EventManager';

import React, { Component } from 'react';
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
            <Link to="/about">About</Link> 
            <Link to="/external">External</Link>
          </div>
          <p>msg: <span>{this.state.infomessage}</span></p>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/external">
              <External />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;