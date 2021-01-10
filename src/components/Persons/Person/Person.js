import React, { Component } from 'react';
// exporting external css style sheet
import './Person.css';
import Aux from '../../../Hoc/Aux'

class Person extends Component{
    render (){
        console.log("[Person.js] renderrinnggg....");
    return (
        <Aux>
            {/* // calling a css class name */}
            <div className='Person'>
                <p onClick={ this.props.click }>My name is {this.props.name} and i am { this.props.age } years old</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={ this.props.changed } value={this.props.name} />
            </div>
        </Aux>
     )
    }
};

export default Person;
