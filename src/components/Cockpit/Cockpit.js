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
    console.log('[Cockpit.js] useEffect');
    // Http request...

    // this code runs when the component is mounted
    setTimeout(() => {
      alert('Welcome back');
    }, 1000);

    // this code runs when the code is unmounted
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

    useEffect(() => {
        // Can send http requests in here
        console.log("[Cockpit.js] useEffect");

        // It contains componentDidMount and componentDidLoad
        // It runs almost all the time so to control this we add [ "when it should run" ]
        // It runs when it renders and when its destroyed
    },[ props.persons ]);
    // You can have more than one useEffects

    useEffect(() => {
        console.log("this will run as componentDidMount");

    // This will run when this component is removed
        return () => {
            console.log("[Cockpit.js]cleanup work");
        }

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
            <h1>ROAD TO BECOMING A REACT DEVELOPER</h1>
            {/* using the arrow function to pass data to a function... Not recommended */}
            <button 
                style = {style}
                onClick={props.clicked}>
                Show My Card
            </button>
        </div>
    );
}

// To stop react from rendering this function everytime there is a change in other states
/* React.memo uses a technique of memorizing or storing a snapshot of this component and if any state changes
 in this snapshot react will execute this function */
/* Passing values individually will help react memorize the props being passed
    eg
        persons = {  this.state.persons }
        personsLength = {  this.state.persons.lenght }
    the memorization will trigger change if any of these props is changed in function
*/
export default React.memo(Cockpit);
