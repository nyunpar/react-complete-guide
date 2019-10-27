import React from 'react';
import classes from './Person.module.css';

const person = (props)=> {
    return (
        <div className={classes.Person} >
            <p onClick ={props.click}> Saya {props.nama} dan saya berumur {props.umur} tahun</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.nama}/>
        </div>

        )
}

export default person;