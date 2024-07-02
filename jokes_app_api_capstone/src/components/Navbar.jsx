import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <div>
            <Link to='/'><button>Home</button></Link>
            <Link to='/search'><button>Search</button></Link>
            <Link to='/about'><button>about</button></Link>
        </div>
    )
}

export default Navbar;