import React,{Component} from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hai, ini aplikasi React</h1>
        <p>Ini benar-benar Bisa</p>
        <Person nama="Jodi" umur = "23"/>
        <Person nama="Dodi" umur = "32">HObiku: Baca</Person>
        <Person nama="Kodi" umur = "23"/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Apakah ini bisa ditampilkan?'));
  }
}

export default App;
