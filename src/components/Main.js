import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom"

import Home from './Home'
import Map from './Map'
import Vaccines from './VaccineList'
import Login from './user_dependent/Login'
import CreateUser from './user_dependent/CreateUser'
import Profile from './user_dependent/Profile'

import '../stylesheets/components/Main.scss'

export default function Main () {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/map' component={Map} />
            <Route path='/vaccines' component={Vaccines} />
            <Route path='/login' component={Login} />
            <Route path='/create-user' component={CreateUser} />
            <Route path='/profile' component={Profile} />
        </Switch>
    )
}