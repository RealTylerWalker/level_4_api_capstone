import { useState } from 'react'


export default function JokeCard(props) {
    const { setUp, delivery, joke } = props;
    const [showPunchline, setShowPunchline] = useState(false)

    return (
        <div>
            <div className="randomJokeContainer">
                <p>{setUp}</p>
                {showPunchline && <p>{delivery}</p>}
                <p>{joke}</p>
                {delivery && <button onClick={() => setShowPunchline(true)}>Show Punchline</button>}
            </div>
        </div>
    )
}