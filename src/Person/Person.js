import React from 'react';
// exporting external css style sheet
import './Person.css';

const person = (props) =>{
    return (
        // calling a css class name
        <div className='Person'>
            <p onClick={ props.click }>My name is {props.name} and i am { props.age } years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={ props.changed } value={props.name} />
        </div>
    )
};

export default person;
