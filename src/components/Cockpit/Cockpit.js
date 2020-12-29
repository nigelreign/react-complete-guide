import React from 'react';

const cockpit = (props) => {
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

export default cockpit;
