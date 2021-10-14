import Auth from '@aws-amplify/auth';
import React, { Component } from 'react'
import FormErrors from '../utility/FormErrors';
import Validate from "../utility/FormValidation"

export default class Login extends Component {

    state = {
        username: "",
        password: "",
        errors: {
            cognito: null,
            blankfield: false
        }
    }

    clearErrorState = () => {
        this.setState({
            errors: {
                cognito: null,
                blankfield: false
            }
        })
    };

    handleSubmit = async event => {
        event.preventDefault();

        // Form validation
        this.clearErrorState();
        const error = Validate(event, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            })
        }

        // AWS Cognito integration 
        try {
            const user = await Auth.signIn(this.state.username, this.state.password);
            console.log(user);
            this.props.history.push("/dashboard");
        } catch (error) {
            let err = null;
            !error.message ? err = { "message": error } : err = error;
            this.setState({
                errors: {
                    ...this.state.errors,
                    cognito: err
                }
            })
        }

        
    }

    onInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        document.getElementById(event.target.id).classList.remove("is-danger");
    }

    render() {
        return (
            <section className="section auth mt-3">
                <div className="container">
                    <h1>Log in</h1>
                    <FormErrors formerrors={this.state.errors} />

                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <p className="control">
                                <input
                                    className="input"
                                    type="text"
                                    id="username"
                                    aria-describedby="usernameHelp"
                                    placeholder="Enter username or Email"
                                    value={this.state.username}
                                    onChange={this.onInputChange}
                                />
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input 
                                    className="input" 
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onInputChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <a href="/forgotpassword">Forgot password?</a>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-link">
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
