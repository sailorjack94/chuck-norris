import React from 'react';


const GetJoke = ({anotherJoke}) => {

    const moreJokes = function(event) {
    event.preventDefault();
    anotherJoke()
    }


    return(
        <>
        <button onClick={moreJokes}>more facts.</button>
        </>
    )
}

export default GetJoke;