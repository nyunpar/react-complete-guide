import React,{useState} from 'react';
import './App.css';
import  Person from './Person/Person';

const  App =  props => {
  const [personsState, setPersonsState] = useState({
    persons : [
      {nama:'Jodi', umur:"23"},
      {nama:'Dodi', umur:"32"},
      {nama:'Kodi', umur:"25"}
    ],
    otherState : 'some other value'
  });

  const GantiNamaHandler = () => {
    setPersonsState({persons:[
      {nama:'Jodi Foster', umur:"23"},
      {nama:'Dodi', umur:"32"},
      {nama:'Kodi', umur:"27"},
    ]
    });
  };
return (
    <div className="App">
      <h1>Hai, ini aplikasi React</h1>
      <p>Ini benar-benar Bisa</p>
      <button
        onClick={GantiNamaHandler}>Ganti Nama</button>
      <Person nama={personsState.persons[0].nama} umur = {personsState.persons[0].umur}/>
      <Person nama={personsState.persons[1].nama} umur = {personsState.persons[1].umur}>Hobiku: Baca</Person>
      <Person nama={personsState.persons[2].nama} umur = {personsState.persons[2].umur}/>
    </div>
  );
  //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Apakah ini bisa ditampilkan?'));
}
  

export default App;
