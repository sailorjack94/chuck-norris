import React from 'react';
import './GetJoke.css'


const GetJoke = ({anotherJoke}) => {

    const moreJokes = function(event) {
    event.preventDefault();
    anotherJoke()
    }


    return(
        <div className = 'button-wrapper'>
        <button onClick={moreJokes}>more facts.</button>
        </div>
    )
}

export default GetJoke;