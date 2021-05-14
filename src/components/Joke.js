import React from 'react';
import './Joke.css'


const Joke = ({joke}) => {
    return (
        <div className = 'joke-body'>
        <h1>{joke.value}</h1>

        </div>
    )
}

export default Joke;