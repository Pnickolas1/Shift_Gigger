import React, {Component} from 'react';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href={"/"}>Shift Gig Message Board</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href={"/"}>All Posts</a>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Navbar