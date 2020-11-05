import React from "react";
import {Link} from 'react-router-dom';
//import './myStyles.css'

const Header = () => {
    return (
        <React.Fragment>
            <h1>My Bookcase</h1>
        <div>
            <Link to="/"> Home </Link>
            <Link to="/bookcase">Bookcase</Link>
            <Link to="/About">About</Link>
        </div>
        
        </React.Fragment>
    )
}

export default Header;
/*/<>
<h1>My Bookcase</h1>
<Link to="/"> Home </Link>
<Link to="/bookcase" className="bookLink"> Bookcase</Link>
</> */