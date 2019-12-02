import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginUser } from '../../actions/user'

import "../../stylesheets/components/Login.scss"

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state

        this.props.loginUser({email, password})
        
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="login">
                <div className='login-padding-top'>
                </div>
                <h2>Welcome Back</h2>
                <form className="login-form"
                    onSubmit={this.handleSubmit}
                >
                    <input 
                        className='email'
                        name="email"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input 
                        className='password'
                        name="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <Link className="btnlink newUserButton"
                        to='/create-user'
                    >
                        New User
                    </Link>
                    <input
                        className='submitUser'
                        type="submit"
                        value="Sign In"
                        />
                </form>
                <div className='login-padding-bottom'>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => loginUser(dispatch, user)
})

export default connect(null, mapDispatchToProps)(Login)