import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { id: '1', name: "Nigel", age: 26},
        { id: '2', name: "Natalie", age: 23},
        { id: '3', name: "Daniel", age: 24}
    ],
    otherState: 'Some other state',
    showPersons: false
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

  render (){

  // Inline css styling
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  let persons = null;
  if(this.state.showPersons){
    persons = (
      <div>
        {/* a loop */}
        { this.state.persons.map((person, index ) => {
          return <Person 
            click = {()=> this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            // the key property allows react to keep track of changes
            key={person.id}
            changed = { (event) => this.changeNameHandler (event, person.id) }
          />
        }) }
    </div>
    );
  }
  return (
    // adding external css style sheet
    <div className="App">
      <h1>This is my react app</h1>
      {/* using the arrow function to pass data to a function... Not recommended */}
      <button 
        style = {style}
        onClick={this.togglePersonsHandler}>
          Show Cards
      </button>
      { persons }
    </div>
  );
  }
}

export default App;
