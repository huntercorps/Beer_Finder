import React, {Component} from 'react';

let navStyle = "navbar navbar-dark bg-dark mb-5";
let textStyle = "navbar-brand mb-0 h1 mx-auto";

class Navbar extends Component {
    render() {
        return (
            <nav className={navStyle}>
                <span className={textStyle}>Beer Finder</span>
            <div>
            </div>
            </nav>
        );
    }
}

export default Navbar;