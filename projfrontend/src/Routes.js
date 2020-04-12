import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./core/Home"
import Signup from './user/Signup'
import Signin from './user/Signin'




export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/signup" exact component={Signin}></Route>
            </Switch>
        </Router>
    )
}
