import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../stylesheets/components/NewUser.scss'

import FormInput from './FormInput'
import { newUser } from '../../actions/user'
import { navigateTo } from '../../helpers'


class NewUser extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const email = this.refs.email.state.email
        const birthday = this.refs.birthday.state.birthday
        const password = this.refs.password.state.password
        const password_confirmation = this.refs.password_confirmation.state.password_confirmation
        const user = {
            email,
            birthday,
            password,
            password_confirmation
        }
        const { newUser, history } = this.props
        newUser(user)
            .then(() => {
                if (localStorage.token) {
                navigateTo(history, "my-vaccines")}
            })
    }

    render() {
        return (
            <div className='newuser'>
                <div className='padding-top'></div>
                <h2>New User</h2>
                <form className='newuser-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' value='email' ref='email' />
                    <FormInput type='date' value='birthday' ref='birthday' />
                    <FormInput type='password' value='password' ref='password' />
                    <FormInput type='password' value='password_confirmation' ref='password_confirmation' />
                    <input className='submit-newuser' type='submit' value="Create Profile" />
                </form>
                <div className='padding-bottom'></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    newUser: (user) => newUser(dispatch, user)
})

export default connect(null, mapDispatchToProps)(NewUser)