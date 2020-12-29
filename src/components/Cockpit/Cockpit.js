import React, { useEffect } from 'react';

const Cockpit = (props) => {
    // using useEffects 

    // Possible error
    /* React Hook "useEffect" is called in function "cockpit"
       that is neither a React function component nor a custom React Hook function. 
       React component names must start with an uppercase letter
    */

    // Fix
    // Make sure the name componet name starts with an uppercase and make sure to export the changed name

    useEffect(() => {
        // Can send http requests in here
        console.log("[Cockpit.js] useEffect");

        // It contains componentDidMount and componentDidLoad
        // It runs almost all the time so to control this we add [ "when it should run" ]
    },[ props.persons ]);
    // You can have more than one useEffects

    useEffect(() => {
        console.log("this will run as componentDidMount");
    // by putting an empty arrar[] useeffect will run at the begining only
    },[])


const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
    return (
        <div>
            <h1>This is my react app</h1>
            {/* using the arrow function to pass data to a function... Not recommended */}
            <button 
                style = {style}
                onClick={props.clicked}>
                Show Cards
            </button>
        </div>
    );
}

export default Cockpit;
