import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

// The constructor runs first before anything else
// You can set our state in the constructor
// eg 
//    this.state = {
  //   persons: [
  //       { id: '1', name: "Nigel", age: 26},
  //       { id: '2', name: "Natalie", age: 23},
  //       { id: '3', name: "Daniel", age: 24}
  //   ],
  //   otherState: 'Some other state',
  //   showPersons: false
  // }

  constructor(props){
    super(props);
    console.log("[App.js] constructor")
  }

  state = {
    persons: [
        { id: '1', name: "Nigel", age: 26},
        { id: '2', name: "Natalie", age: 23},
        { id: '3', name: "Daniel", age: 24}
    ],
    otherState: 'Some other state',
    showPersons: false
  }

// this will run after the constructor
  static getDerivedStateFromProps(props, state){
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentDidMount will run after the render method

  componentDidMount(){
    console.log("[App.js] componentDidMount");
  }

  switchNameHandler = (newName) => {
    this.state({
          persons: [
      { name: newName, age: 26},
      { name: "Natalie", age: 23},
      { name: "Lungani", age: 22}
    ],
    })
  }

// Event handler from an input passed to a componet using props
  changeNameHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

// It is good practice to not mutate the array directly 
// thats why we are creating a new object
    const person = { ...this.state.persons[personIndex]};

// assign the new name typed in the input box to the name in the array
    person.name = event.target.value;

// call the persons array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // This will create a copy of the array before splicing it
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    //This removes one element from the array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

// this method runs after the the getDerivedStateFromProps method

  render (){

  console.log("[App.js] render");
  let persons = null;
  if(this.state.showPersons){
    persons = (
      <div>
        {/* a loop */}
        <Persons 
          persons= {this.state.persons}
          clicked = { this.deletePersonHandler }
          changed = { this.changeNameHandler }
        />
    </div>
    );
  }
  return (
    // adding external css style sheet
    <div className="App">
      <Cockpit clicked={ this.togglePersonsHandler } />
      { persons }
    </div>
  );
  }
}

export default App;
