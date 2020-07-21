import React from 'react';
import './App.css';

class HelloWorld extends React.Component {

state = {
  show: true
}

toggleShow = () => {
  this.setState({show: !this.state.show});
}


  render() {
    if(this.state.show){
      return (
        <div id="Hello">
        <h3>{this.props.language}</h3>
        {this.props.mytext}
        <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
        )
    } else {
      return <h1>THERE ARE NO ELEMENTS!
      <button onClick={this.toggleShow}>
        Toggle Show
      </button>
      </h1>
    }

 
  }
}

// const App = () => <div>This is my component: <HelloWorld></HelloWorld> </div>

// class App extends React.Component {
//   render() {
//     return <div>This is my component <HelloWorld></HelloWorld></div>
//   }
// }

function App() {
  return (
   <div>This is my component: 
     <HelloWorld mytext="Hello Dacta" language="english"></HelloWorld>
      <HelloWorld mytext="Konichiwa Dacta">
       </HelloWorld> <HelloWorld mytext="Oui Dacta"></HelloWorld>  
       </div>
  );
}

export default App;
