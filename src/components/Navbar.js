import React from 'react'
import {
    NavLink
} from "react-router-dom"
import { connect } from 'react-redux'

import '../stylesheets/components/Navbar.scss'

function Navbar ({user}) {

    const ifUserPresent = (yes, no) => {
        return (user.id) ? yes : no
    }

    const myVaccineLink = (
            <li>
                <NavLink to='/my-vaccines'>My Vaccines</NavLink>
            </li>
            )

    return (
            <nav className='navbar'>
                <ul className='options-main'>
                    <li>
                        <NavLink to='/'> Home </NavLink>    
                    </li>
                    <li>
                        <NavLink to='/map'> World Map </NavLink>
                    </li>
                    <li>
                        <NavLink to='/vaccines'> Vaccines </NavLink>
                    </li>
                </ul>
                <ul className={ifUserPresent('options-user','sign-out')}>
                    {ifUserPresent(myVaccineLink, <></>)}
                    <li>
                        <NavLink to='/login'> 
                            {ifUserPresent("Sign Out","Log In")}
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, null)(Navbar)