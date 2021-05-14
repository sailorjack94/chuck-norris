import React from 'react';
import chucknorris from '../img/chuck-norris.png';
import './ChuckNorris.css'

const ChuckNorris = () => {
    return(
        <div className="image">
            <img alt='Chuck Himself' src={chucknorris} />
        </div>
    )
}

export default ChuckNorris;