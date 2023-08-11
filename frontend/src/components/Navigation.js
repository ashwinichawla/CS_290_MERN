import React from 'react';
import { Link } from 'react-router-dom';
import { TiFolderAdd, TiHome } from 'react-icons/ti';


function Navigation() {
  return (
    <nav className="Exercise App-nav">
        <Link to="/"><i><TiHome /></i></Link>
        <Link to="../add-exercise"><i><TiFolderAdd /></i> Log an Exercise</Link>
    </nav>
  );
}

export default Navigation;
