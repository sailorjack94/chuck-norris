import React, {useEffect, useState} from 'react';
import ChuckNorris from '../components/ChuckNorris';
import GetJoke from '../components/GetJoke';
import Joke from '../components/Joke';
import './CNJokeHolder.css'


const CNJokeHolder = () => {

    const [joke, setJoke] = useState({})

        useEffect(() => {
            getJoke();
        }, [])

        const anotherJoke = () => {
            getJoke()
        }

        const getJoke = () => {

            fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(joke => setJoke(joke))
        }



    return(
        <div className="container">
        <ChuckNorris />
        <Joke joke = {joke}/>

        <GetJoke anotherJoke = {anotherJoke} />
        </div>
    )
};


export default CNJokeHolder;