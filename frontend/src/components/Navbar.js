import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="">ElasticSearch</Link></li>
            <li><Link to="">ReactJS</Link></li>
            <li><Link to="">Account</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar