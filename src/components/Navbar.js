import Auth from '@aws-amplify/auth';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    handleLogOut = async event => {
        event.preventDefault();
        try {
            await Auth.signOut();
            this.props.auth.setAuthStatus(false);
            this.props.auth.setUser(null);
            this.props.history.push("/");
        } catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/" exact>
                        {/* Replace this part with the logo of the company */}
                        logo
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        {this.props.auth.isAuthenticated && this.props.auth.user && (
                            <p>
                                <Link className="button is-light" to="/dashboard">
                                    Welcome {this.props.auth.user.username}
                                </Link>
                            </p>
                        )}
                        <div className="buttons">
                            {!this.props.auth.isAuthenticated && (
                                <div>
                                    <Link to="/signup" className="button is-link">
                                        <strong>Sign Up</strong>
                                    </Link>
                                    <Link to="/login" className="button is-light">
                                        Log In
                                    </Link>
                                </div>
                            )}
                            {this.props.auth.isAuthenticated && (
                                <Link onClick={this.handleLogOut} className="button is-light">
                                    Log out
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
