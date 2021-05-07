import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = ({ loggedIn }) => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            { loggedIn ? <p>In</p> : <> | <Link to="/login">Log In</Link> | <Link to="/signup">Sign Up</Link></> }
        </div>
    );
};

const mapStateToProps = ({ user }) => {
    return {
        loggedIn: !!user
    }
}

export default connect(mapStateToProps)(Navbar);