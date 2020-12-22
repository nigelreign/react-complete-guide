import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personState, setPersonState ] = useState(
    {
      persons: [
        { name: "Nigel", age: 26},
        { name: "Natalie", age: 23},
        { name: "Daniel", age: 24}
      ],
      otherState: 'some state'
    }
  );
  const switchNameHandler = (newName) =>{
    setPersonState({
          persons: [
      { name: newName, age: 26},
      { name: "Natalie", age: 23},
      { name: "Lungani", age: 22}
    ],
    otherState: personState.otherState
    });
  }

// Event handler from an input passed to a componet using props
  const changeNameHandler = (event) =>{
    setPersonState({
          persons: [
      { name: "Nigel", age: 26},
      { name: event.target.value, age: 23},
      { name: "Lungani", age: 22}
    ],
    otherState: personState.otherState
    });
  }

  // Inline css styling
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  return (
    // adding external css style sheet
    <div className="App">
      <h1>Hello World</h1>
      <p>this is a paragraph</p>
      {/* using the arrow function to pass data to a function... Not recommended */}
      <button 
        style = {style}
        onClick={() => switchNameHandler('Mbongeni Nkiwane')}>
          Switch Name
      </button>
      <Person name={ personState.persons[0].name }  age={ personState.persons[0].age }/>
      {/* passing functions as a prop */}
      {/* using the bind method to pass data to a function... Recommended */}
      <Person 
        click={ switchNameHandler.bind(this, 'Jogn Cena') }
        changed = {changeNameHandler}
        name={ personState.persons[1].name } age={ personState.persons[1].age }>
           I love cooking 
      </Person>
      <Person name={ personState.persons[2].name } age={ personState.persons[2].age }/>
    </div>
  );
  }

export default App;
