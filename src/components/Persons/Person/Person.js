import React, { Component } from 'react';

import PropTypes from 'prop-types';

// exporting external css style sheet
import './Person.css';
import Aux from '../../../Hoc/Aux'

class Person extends Component{
    render (){
        console.log("[Person.js] renderrinnggg....");
    return (
        // React also has a built in Aux component called React.Fragment you can use it using any method below
        /* import React, { Fragment } from 'react'

            <Fragment>
                some JSX code
            </Fragment>

            OR
            <React.Fragment>
                some JSX code
            </React.Fragment>
         */
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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;
