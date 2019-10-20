import React from 'react';


const person = (props)=> {
    return (
        <div>
            <p>Saya {props.nama} dan saya berumur {props.umur} tahun</p>
            <p>{props.children}</p>
        </div>

        )
}

export default person;