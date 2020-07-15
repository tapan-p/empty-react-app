import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{

    //constructor
  constructor(props){
    super(props);
    this.state= {
      
    }
  }
  
  
    render(){
    return <div className="App-header">
    <h1>{this.props.title}</h1>
    
  </div>
  }
}
export default App;
