import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FlagsContext } from './FlagsContext'

function Navbar() {

    const { flags, setFlags } = useContext(FlagsContext)

    const [nsfwChecked, setNsfwChecked] = useState(true)
    const [religiousChecked, setReligiousChecked] = useState(true)
    const [politicalChecked, setPoliticalChecked] = useState(true)
    const [racistChecked, setRacistChecked] = useState(true)
    const [sexistChecked, setSexistChecked] = useState(true)
    const [explicitChecked, setExplicitChecked] = useState(true)

    const handleNsfwChange = () => {
        if (nsfwChecked) {
            // remove from context
            setFlags(prev => ([...prev.filter(flag => flag !== "nsfw")]))
        } else {
            // add to context
            setFlags(prev => ([...prev, "nsfw"]))
        }

        setNsfwChecked(!nsfwChecked)

    }
    const handleReligiousChange = () => {
        if (religiousChecked) {
            setFlags(prev => ([...prev.filter(flag => flag !== "religious")]))
        } else {
            setFlags(prev => ([...prev, "religious"]))
        }
        setReligiousChecked(!religiousChecked);
    }

    const handlePoliticalChange = () => {
        if (politicalChecked) {
            setFlags(prev => ([...prev.filter(flag => flag !== "political")]))
        } else {
            setFlags(prev => ([...prev, "political"]))
        }
        setPoliticalChecked(!politicalChecked);
    }

    const handleRacistChange = () => {
        if (racistChecked) {
            setFlags(prev => ([...prev.filter(flag => flag !== "racist")]))
        } else {
            setFlags(prev => ([...prev, "racist"]))
        }
        setRacistChecked(!racistChecked);
    }

    const handleSexistChange = () => {
        if (sexistChecked) {
            setFlags(prev => ([...prev.filter(flag => flag !== "sexist")]))
        } else {
            setFlags(prev => ([...prev, "sexist"]))
        }
        setSexistChecked(!sexistChecked);
    }

    const handleExplicitChange = () => {
        if (explicitChecked) {
            setFlags(prev => ([...prev.filter(flag => flag !== "explicit")]))
        } else {
            setFlags(prev => ([...prev, "explicit"]))
        }
        setExplicitChecked(!explicitChecked);
    }

    return (

        <div>
            <Link to='/'><button>Home</button></Link>
            <Link to='/search'><button>Search</button></Link>
            <Link to='/about'><button>about</button></Link>

            <fieldset>
                <legend>Exculde the following:</legend>
                <input type='checkbox' onChange={handleNsfwChange} checked={nsfwChecked} id="NSFW"></input>
                <label htmlFor="NSFW">NSFW</label>
                <input type='checkbox' onChange={handleReligiousChange} checked={religiousChecked} id="Religious"></input>
                <label htmlFor="Religious">Religious</label>
                <input type='checkbox' onChange={handlePoliticalChange} checked={politicalChecked} id="Politcal"></input>
                <label htmlFor="Political">Political</label>
                <input type='checkbox' onChange={handleRacistChange} checked={racistChecked} id="Racist"></input>
                <label htmlFor="Racist">Racist</label>
                <input type='checkbox' onChange={handleSexistChange} checked={sexistChecked} id="Sexist"></input>
                <label htmlFor="Sexist">Sexist</label>
                <input type='checkbox' onChange={handleExplicitChange} checked={explicitChecked} id="Explicit"></input>
                <label htmlFor="Explicit">Explicit</label>
            </fieldset>
        </div>
    )
}

export default Navbar;