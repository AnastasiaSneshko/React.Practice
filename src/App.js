import React from 'react';
import { Component } from 'react';
import Clicker from './components/Clicker/clicker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }  
  render(){
    return <React.Fragment>
      <Clicker />
    </React.Fragment>
  }
}

export default App;
