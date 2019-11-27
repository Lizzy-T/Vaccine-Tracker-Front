import React from 'react'

import '../stylesheets/components/Navbar.scss'

export default function Navbar (props) {
    return (
        <nav className='navbar'>
            <ul className='options-main'>
                <li>Home</li>
                <li>World Map</li>
                <li>Vaccines</li>
            </ul>
            <ul className='options-user'>
                <li>Profile</li>
                <li>Sign In</li>
            </ul>
        </nav>
    )
}