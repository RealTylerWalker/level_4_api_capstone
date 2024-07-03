import axios from "axios";

async function getRandomJoke(){
    axios
    .get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });

}

export default getRandomJoke;