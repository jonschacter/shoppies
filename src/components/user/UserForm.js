// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux'

// actions
import { signup, login } from '../../actions/user.js'

class UserForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    // controlled form logic
    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    // props.type (sourced from Route) will determine whether form acts as a log in or sign up form
    handleSubmit = e => {
        e.preventDefault()

        const { type, login, signup, history } = this.props

        if (type === "Log In") {
            login(this.state, history)
        } else {
            signup(this.state, history)
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