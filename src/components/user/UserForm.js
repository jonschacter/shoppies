import React, { Component } from 'react';
import { connect } from 'react-redux'

import { signup, login } from '../../actions/user.js'

class UserForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        if (this.props.type === "Log In") {
            console.log("logging in")
            this.props.login(this.state, this.props.history)
        } else {
            console.log("signing up")
            this.props.signup(this.state, this.props.history)
        }
    }

    render() {
        return (
                <div className="user-form">
                    <h3 className="form-title">{this.props.type}</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:</label>
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                        <br />
                        <label>Password:</label>
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                        <br />
                        <input className="submit" type="submit" value={this.props.type} />
                    </form>
                </div>
        );
    }
}

export default connect(null, { login, signup })(UserForm);