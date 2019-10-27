import React,{Component} from 'react';
 // eslint-disable-next-line
import  Classes from './App.module.css';
import  Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id:'adfasf',nama:'Jodi', umur:"23"},
      {id:'adfadsa',nama:'Dodi', umur:"32"},
      {id:'efaeda',nama:'Kodi', umur:"25"}
    ],
    otherState : 'some other value',
    showPersons : false
  }
  HilangkanNamaHandle = () =>{
    const doessShow = this.state.showPersons;
    this.setState({showPersons: !doessShow});
  }
  namaBerubahHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.nama = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons})
  }
  hapusNamaHandler = (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }
 
  render(){
    const style ={
      backgroundColor:'green',
      color: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding :'8px',
      cursor:'pointer',
      
    };
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
            {this.state.persons.map((person,index) =>{
              return <Person 
                  click = {()=> this.hapusNamaHandler(index)}
                  nama={person.nama}
                  umur={person.umur}
                  key={person.id}
                  changed={(event)=>this.namaBerubahHandler(event,person.id)}/>
            })}
        </div> 
      );
      style.backgroundColor = 'red';
      
    }

    let classes =[];
    if(this.state.persons.length <= 2 ){
      classes.push(Classes.red);
    }
    if(this.state.persons.length <= 1 ){
      classes.push(Classes.bold);
    }
    

    return (
      <div className={Classes.App}>
        <h1>Hai, ini aplikasi React</h1>
        <p className ={classes.join(' ')}>Ini benar-benar Bisa</p>
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
