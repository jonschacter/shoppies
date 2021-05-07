import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { logout } from '../actions/user.js'

const Navbar = ({ loggedIn, logout, history }) => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            { loggedIn ? <> | <Link to="#" onClick={ () => logout(history) }>Log Out</Link></> : <> | <Link to="/login">Log In</Link> | <Link to="/signup">Sign Up</Link></> }
        </div>
    );
};

const mapStateToProps = ({ user }) => {
    return {
        loggedIn: !!user
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar));