import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/form">Add Company</Link>
        </div>
    );
}

export default Navbar;