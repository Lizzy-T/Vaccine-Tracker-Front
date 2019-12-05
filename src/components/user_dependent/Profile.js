import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserVaccineListing from './UserVaccineList'
import AddVaccineForm from './AddVaccineForm'

import "../../stylesheets/components/Profile.scss"

import { setUserVaccines } from '../../actions/user-vaccines'
import { setUser } from '../../actions/user'

class Profile extends Component {
    state = {
        isFormShowing: false
    }

    componentDidMount = () => {
        const { setUserVaccines, setUser, user } = this.props
        setUserVaccines(user.id)
        setUser()
    }

    toggleForm = () => {
        this.setState({ isFormShowing: !this.state.isFormShowing})
    }

    render() {
        const { isFormShowing } = this.state
        const { userVaccines } = this.props
        return (
            <div className="profile">
                <h2>My Current Vaccines</h2>
                <UserVaccineListing vaccineList={userVaccines} />
                <h2 className="clickable addmore" onClick={this.toggleForm} >Add Vaccination</h2>
                {
                    isFormShowing
                    ? <AddVaccineForm />
                    : <></>
                }
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setUserVaccines: (id) => setUserVaccines(dispatch, id),
    setUser: () => setUser(dispatch)
})

const mapStateToProps = (state) => ({
    userVaccines: state.userVaccines,
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)