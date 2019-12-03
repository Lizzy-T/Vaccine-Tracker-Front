import React from 'react'
import {
    NavLink
} from "react-router-dom"

import '../stylesheets/components/Navbar.scss'
import { TOKEN } from '../helpers'

export default function Navbar (props) {
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
                <ul className='options-user'>
                    <li>
                        <NavLink to='/login'> Sign In </NavLink>
                    </li>
                    {
                        TOKEN
                        ?<li>
                            <NavLink to='/my-vaccines'>My Vaccines</NavLink>
                        </li>
                        : <></>
                    }
                </ul>
            </nav>
    )
}