import React, { Component } from 'react'

export default class FormInput extends Component {
    state = {
        [this.props.value]: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    render() {
        const { value, type } = this.props

        return (
            <input 
                className={value}
                name={value}
                type={type}
                placeholder={value}
                value={this.state.value}
                onChange={this.handleChange}
            />
        )
    }
}
