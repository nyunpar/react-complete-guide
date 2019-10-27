import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props)=> {
    return (
        <div className="Person">
            <p onClick ={props.click}> Saya {props.nama} dan saya berumur {props.umur} tahun</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.nama}/>
        </div>

        )
}

export default Radium(person);