import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormInput from './FormInput'

import { addVaccine } from '../../actions/user-vaccines'

import "../../stylesheets/components/AddVaccineForm.scss"

class AddVaccineForm extends Component {
    state = {
        vaccine_id: 0
    }
    
    vaccineOptions = () => {
        const { vaccines, userVaccines } = this.props
        const userVaccineId = userVaccines.map(vaccine => parseInt(vaccine.vaccine.id))
        const validVaccines = vaccines.reduce((memo, vaccine) => {
            if ( userVaccineId.includes(vaccine.id) ) { return memo }
            else { return [...memo, vaccine] }
        }, [])

        return validVaccines.map(vaccine => <option key={vaccine.id} value={vaccine.id} >{vaccine.name}</option> )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { vaccine_id } = this.state
        const given = this.refs.given.state.given
        let exp = this.refs.exp.state.exp
        
        if (exp === "") { exp = null }
        
        const vaccine = { vaccine_id, given, exp}
        const { addVaccine } = this.props 
        
        addVaccine(vaccine)
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='addvaccine'>
                <div className="form-labels">
                    <p>Vaccine</p>
                    <p className='center' >Given</p>
                    <p className='center' >Expiration(optional)</p>
                </div>
                <form className="addVaccine-form" onSubmit={this.handleSubmit}>
                    <div className="form-table">
                        <select name="vaccine_id" onChange={this.handleChange}>
                            <option>- Select Vaccine -</option>
                        {this.vaccineOptions()}
                        </select>
                        <FormInput type='date' value='given' ref='given'/>
                        <FormInput type='date' value='exp' ref='exp' />
                    </div>
                    <input className='submit-form' type='submit' value='Add to My Vaccines'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    vaccines: state.vaccines,
    userVaccines: state.userVaccines
})

const mapDispatchToProps = (dispatch) => ({
    addVaccine: (vaccine) => addVaccine(dispatch, vaccine)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddVaccineForm)