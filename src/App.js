import React,{Component} from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hai, ini aplikasi React</h1>
        <p>Ini benar-benar Bisa</p>
        <Person/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Apakah ini bisa ditampilkan?'));
  }
}

export default App;
