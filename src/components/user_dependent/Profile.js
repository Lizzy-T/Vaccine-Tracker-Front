import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserVaccineListing from './UserVaccineList'

import "../../stylesheets/components/Profile.scss"

import { setUserVaccines } from '../../actions/user-vaccines'
import { setUser } from '../../actions/user'
import { USER_ID } from '../../helpers'

class Profile extends Component {
    componentDidMount = () => {
        const { setUserVaccines, setUser, user } = this.props

        if (user.id) {
            setUser(user.id)
            setUserVaccines(user.id)
        } else {
            setUser(USER_ID)
            setUserVaccines(USER_ID)
        }
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
    setUser: (id) => setUser(dispatch, id)
})

const mapStateToProps = (state) => ({
    userVaccines: state.userVaccines,
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)