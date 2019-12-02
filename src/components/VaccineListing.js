import React from 'react'

import '../stylesheets/components/VaccineListing.scss'

export default function VaccineListing({
    name, 
    description,
    when_to_vaccinate,
    routine}) {
    
        
    return (
        <div className = {`vaccine-card
            ${routine
            ? "routine"
            : "travel"
            }`}
        >
            <h3>{name}</h3>
            <p>Description: {description}</p>
            <p>{
                routine
                ? "Routine vaccination - "
                : "Additional vaccine for travel - "}
                {when_to_vaccinate}
            </p>
        </div>
    )
}
