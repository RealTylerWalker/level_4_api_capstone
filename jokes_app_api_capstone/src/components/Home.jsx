import { FlagsContext } from "./FlagsContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";


function Home() {
    const { flags } = useContext(FlagsContext)
    const [showPunchline, setShowPunchline] = useState(false)

    const [randomJoke, setRandomJoke] = useState({
        setup: "",
        delivery: "",
        joke: "",
    })

    useEffect(() => {
        getRandomJoke()
    }, []);

    function getRandomJoke() {
        setShowPunchline(false)
        axios
            .get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${flags.join()}`)
            .then((response) => {
                setRandomJoke({
                    setup: response.data.setup,
                    delivery: response.data.delivery,
                    joke: response.data.joke,
                })
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (



        <div>
            <h1>Home</h1>
            <div className="randomJokeContainer">
                <p>{randomJoke.setup}</p>
                {showPunchline ? <p>{randomJoke.delivery}</p> : null}
                <p>{randomJoke.joke}</p>
                {randomJoke.delivery && <button onClick={() => setShowPunchline(true)}>Show Punchline</button>}
            </div>
            <button onClick={getRandomJoke}>Get New Joke</button>
        </div>
    )

}

export default Home;