
import { useState, React, createContext } from 'react'


const FlagsContext = createContext()

function FlagsContextProvider(props) {
    const [flags, setFlags] = useState(["nsfw", "religious", "political", "racist", "sexist", "explicit"]);


    return (
        <FlagsContext.Provider
            value={{
                flags: flags,
                setFlags: setFlags
            }}
        >
            {props.children}
        </FlagsContext.Provider>
    )

}
export { FlagsContext, FlagsContextProvider };