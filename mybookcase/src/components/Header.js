import React from "react";
import {Link} from 'react-router-dom';
import './myStyles.css'

function Header (props) {
    let className = props.primary ? 'primary' : ''
    return (
        <React.Fragment>
        <div className='container mt-10'>
            <h1 className={'{`$className`} font-family'}>My Bookcase</h1>
        </div>
            <Link to="/"> Home </Link>
            <Link to="/bookcase">Bookcase</Link>
            <Link to="/About">About</Link>
        
        </React.Fragment>
    )
}

export default Header;
/*/<>
<h1>My Bookcase</h1>
<Link to="/"> Home </Link>
<Link to="/bookcase" className="bookLink"> Bookcase</Link>
</> */