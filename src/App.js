import React,{Component} from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {nama:'Jodi', umur:"23"},
      {nama:'Dodi', umur:"32"},
      {nama:'Kodi', umur:"25"},
    ]
  }

  GantiNamaHandler = ()=> {
    console.log('Telah diklik!');
  }

  render(){
    return (
      <div className="App">
        <h1>Hai, ini aplikasi React</h1>
        <p>Ini benar-benar Bisa</p>
        <button
          onClick={this.GantiNamaHandler}>Ganti Nama</button>
        <Person nama={this.state.persons[0].nama} umur = {this.state.persons[0].umur}/>
        <Person nama={this.state.persons[1].nama} umur = {this.state.persons[1].umur}>Hobiku: Baca</Person>
        <Person nama={this.state.persons[2].nama} umur = {this.state.persons[2].umur}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Apakah ini bisa ditampilkan?'));
  }
}

export default App;
