import React from 'react'

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
        <div>
            { createList() }
        </div>
    )
}
