import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Shoppies from './Shoppies.js'

class App extends Component {
    render(){
        return(
            <div className="App">
                <Router>
                    <Navbar />
                    <h1>The Shoppies</h1>
                    <Switch>
                        <Route exact path="/" component={Shoppies} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App