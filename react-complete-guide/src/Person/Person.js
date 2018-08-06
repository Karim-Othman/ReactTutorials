import React from 'react';

const person = (props) => {

    let age = Math.floor(Math.random()*30);
    return(

    <div>
    <p> I am {props.name} and I am {age} years old!</p>
    <p>{props.children}</p>
    </div>
    );
};


export default person;