import React,{Component} from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {nama:'Jodi', umur:"23"},
      {nama:'Dodi', umur:"32"},
      {nama:'Kodi', umur:"25"}
    ],
    otherState : 'some other value',
    showPersons : false
  }

  GantiNamaHandler = (NamaBaru) => {
    //console.log('Telah diklik!');
    //this.state.persons[0].nama= "Jodi Foster";
    this.setState({persons:[
      {nama: NamaBaru, umur:"23"},
      {nama:'Dodi', umur:"32"},
      {nama:'Kodi', umur:"27"},
    ]
    })
  }
  
  HilangkanNamaHandle = () =>{
    const doessShow = this.state.showPersons;
    this.setState({showPersons: !doessShow});
  }
  namaBerubahHandler = (event)=>{
    this.setState({persons:[
      {nama:'Jodi', umur:"23"},
      {nama: event.target.value , umur:"32"},
      {nama:'Kodi', umur:"25"}] 
    })
  }

  render(){
    const style ={
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding :'8px',
      cursor:'pointer'
    };
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
        <Person 
          nama={this.state.persons[0].nama} 
          umur = {this.state.persons[0].umur}/>
        <Person 
          nama={this.state.persons[1].nama} 
          umur = {this.state.persons[1].umur}
          click ={this.GantiNamaHandler.bind(this,'Rodi')}
          changed ={this.namaBerubahHandler}>Hobiku: Baca</Person>
        <Person 
          nama={this.state.persons[2].nama} 
          umur = {this.state.persons[2].umur}/>
      </div> 
      );
    }



    return (
      <div className="App">
        <h1>Hai, ini aplikasi React</h1>
        <p>Ini benar-benar Bisa</p>
        <button
          style={style}
          onClick={this.HilangkanNamaHandle}>Ganti Nama</button>
          {persons}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Apakah ini bisa ditampilkan?'));
  }
}

export default App;
