import React, { Component } from 'react';

import Person from './Person/Person';

// Imported from app js 
// Contains our loop
class Persons extends Component {
  // This will run first
  // Its part of the creation life cylce

  // static getDerivedStateFromProps(props, state){
  //   console.log("[Persons.js] componetDerirvedStateFromProps");
  //   return state;
  // }

// These will run as soon as there is a state change
  shouldComponentUpdate(nextProps, nextState){
    console.log("[Persons.js] shouldComponetUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: 'SnapShot!' };
  }

  componentDidUpdate(prevProps, prevState, snapShot){
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapShot);
  }

  render() {
    console.log("[Person.js] renderiinng.....");
    return this.props.persons.map((person, index ) => {
          return <Person 
            click = {()=> this.props.clicked(index)}
            name={person.name}
            age={person.age}
            // the key property allows react to keep track of changes
            key={person.id}
            changed = { (event) => this.props.changed (event, person.id) }
          />
        });

  }
}

export default Persons;
