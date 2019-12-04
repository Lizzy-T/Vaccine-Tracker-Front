import React from 'react'

import '../../stylesheets/components/UserVaccineListing.scss'

export default function UserVaccineListing({exp, given, vaccine}) {

    return (
        <div className='user-vaccine-card'>
            <p>{vaccine.name}</p>
            <p className='myVaccine-date'>{given}</p>
            <p className='myVaccine-date'>{
                exp
                ? exp
                : "Lifetime"
            }</p>
        </div>
    )
}
