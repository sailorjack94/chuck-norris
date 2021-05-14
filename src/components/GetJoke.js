import React from 'react';
import './GetJoke.css'


const GetJoke = ({anotherJoke}) => {

    const moreJokes = function(event) {
    event.preventDefault();
    anotherJoke()
    }


    return(
        <div className = 'button-wrapper'>
        <button className='btn' onClick={moreJokes}>Click Me</button>
        </div>
    )
}

export default GetJoke;