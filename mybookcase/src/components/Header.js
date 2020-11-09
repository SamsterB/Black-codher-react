import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron} from 'react-bootstrap';
import './myStyles.css'
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
    
        <React.Fragment>
        <div className="mycomponent">
        </div>
        <div className="container">

      <Jumbotron>
  
  <h1>My Bookcase</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
</Jumbotron>
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