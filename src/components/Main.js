import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom"

import Home from './Home'
import Map from './Map'
import Vaccines from './VaccineList'

import '../stylesheets/components/Main.scss'

export default function Main () {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/map' component={Map} />
            <Route path='/vaccines' component={Vaccines} />
        </Switch>
    )
}