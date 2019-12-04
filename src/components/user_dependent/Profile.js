import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserVaccineListing from './UserVaccineList'

import "../../stylesheets/components/Profile.scss"

import { setUserVaccines } from '../../actions/user-vaccines'
import { setUser } from '../../actions/user'

class Profile extends Component {
    componentDidMount = () => {
        const { setUserVaccines, setUser, user } = this.props
        setUser()
        setUserVaccines(user.id)
    }

    render() {
        const { userVaccines } = this.props
        return (
            <div>
                <h1>My Current Vaccines</h1>
                <UserVaccineListing vaccineList={userVaccines} />
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