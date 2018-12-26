import React, { Component } from 'react';

class Login extends Component {
    componentDidMount() {
        console.log(this.props)
        if (this.props.user) {
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <h2>Login works!</h2>
        )
    }
}

export default Login;