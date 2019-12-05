import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import FormInput from './FormInput'
import Errors from './Errors'

import { loginUser, logoutUser } from '../../actions/user'
import { navigateTo } from '../../helpers'

import "../../stylesheets/components/Login.scss"

class Login extends Component {
    componentDidMount = () => {
        localStorage.clear()
        this.props.logoutUser()
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const password = this.refs.password.state.password
        const email = this.refs.email.state.email
        const { history, loginUser } = this.props
        
        loginUser({email, password})
            .then(()=> {
                if (localStorage.token) {
                navigateTo(history, "my-vaccines")}
            })
    }

    render() {
        const { error } = this.props
        return (
            <div className="login">
                <div className='login-padding-top'>
                </div>
                <h2>Welcome Back</h2>

                <form className="login-form"
                    onSubmit={this.handleSubmit} >
                    <FormInput value="email" type="text" ref="email"/>
                    <FormInput value="password" type="password" ref="password"/>
                    { error
                    ? <Errors errors={[error]} />
                    : <></>
                    }
                    <Link className="btnlink newUserButton"
                        to='/new-user'>
                        New User
                    </Link>
                    <FormInput value="signIn" type="submit" />
                </form>
                <div className='login-padding-bottom'>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => loginUser(dispatch, user),
    logoutUser: () => logoutUser(dispatch)
})

const mapStateToProps = (state) => ({
    error: state.user.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)