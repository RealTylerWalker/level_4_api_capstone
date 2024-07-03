import { FlagsContext } from "./FlagsContext";
import { useContext, useState } from "react";
import JokeCard from "./JokeCard";
import axios from "axios";


function Search() {

    const { flags } = useContext(FlagsContext)

    const [textInput, setTextInput] = useState('')
    const [jokes, setJokes] = useState([])

    function getJokesByKeyword(e) {
        e.preventDefault()
        axios
            .get(`https://v2.jokeapi.dev/joke/Any?amount=10&blacklistFlags=${flags.join()}&contains=${textInput}`)
            .then((response) => {
                setJokes((response.data.jokes))
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <h1>Search</h1>
            <form>
                <input value={textInput} onChange={(e) => setTextInput(e.target.value)} type="text" placeholder="keyword" />
                <button onClick={(e) => getJokesByKeyword(e)} >Search</button>
            </form>
            {jokes?.map((joke) => <JokeCard key={joke.id} setUp={joke.setup} delivery={joke.delivery} joke={joke.joke} />)}
        </div>
    )
}

export default Search;