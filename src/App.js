import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Shoppies from './Shoppies.js'
import UserForm from './components/user/UserForm.js'

class App extends Component {
    render(){
        return(
            <div className="App">
                <Router>
                    <Navbar />
                    <h1>The Shoppies</h1>
                    <Switch>
                        <Route exact path="/" component={Shoppies} />
                        <Route exact path="/signup" render={(props) => <UserForm {...props} type="Sign Up" />} />
                        <Route exact path="/login" render={(props) => <UserForm {...props} type="Log In" />} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App