import React from 'react'
import { connect } from 'react-redux'

import VaccineListing from './VaccineListing'

import '../stylesheets/components/VaccineList.scss'

function VaccineList({vaccines}) {

    const createVaccineListing = vaccines.map(vaccine => (
        <li key={vaccine.id}>
            <VaccineListing {...vaccine} />
        </li>
    ))
    
    return (
        <div className='vaccine-card-container'>
            <h2>General Vaccine Information</h2>
            <ul>
                {createVaccineListing}
            </ul>
            <div className='sources'>
                <h4>Sources:</h4>
                <a href='https://www.who.int/topics/vaccines/en/' 
                    target="_blank"
                    rel="noopener noreferrer"
                    >World Health Organization</a>
                <a href='https://www.passporthealthusa.com/vaccinations/' 
                    target="_blank"
                    rel="noopener noreferrer"
                    >Passport Health</a>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    vaccines: state.vaccines
})

export default connect (mapStateToProps, null)(VaccineList)