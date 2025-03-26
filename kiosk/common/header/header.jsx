import React from "react";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";

function Header(props) {
    return (        
        <header>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/main">
                <button>Main</button>
            </Link>
        </header>
    );
}

export default Header;