import React from 'react'

export default function UserVaccineListing({exp, given, vaccine}) {

    return (
        <div>
            <p>{vaccine.name}</p>
            <p>Given {given}</p>
            <p>Expires: {
                exp
                ? exp
                : "Lifetime"
            }</p>
        </div>
    )
}
