import React from 'react'

import '../../stylesheets/components/UserVaccineList.scss'

import UserVaccineListing from './UserVaccineListing'

export default function UserVaccineList({vaccineList}) {
    const createList = () => {
        return vaccineList.map(vaccine => (
            <li key={vaccine.id}>
                <UserVaccineListing {...vaccine} />
            </li>
        ))
    }
    return (
        <div className='userVaccineList'>
            <div className='myVaccine-table-header'>
                <p>Vaccine</p>
                <p className='myVaccine-date'>Given</p>
                <p className='myVaccine-date'>Expires</p>
            </div>
            <ul>
                { createList() }
            </ul>
        </div>
    )
}
