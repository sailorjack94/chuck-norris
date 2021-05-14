import React, {useEffect, useState} from 'react';
import ChuckNorris from '../components/ChuckNorris';
import GetJoke from '../components/GetJoke';
import Joke from '../components/Joke';


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
        <>
        <ChuckNorris />
        <Joke joke = {joke}/>

        <GetJoke anotherJoke = {anotherJoke} />
        </>
    )
};


export default CNJokeHolder;