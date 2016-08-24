"use strict";

import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    if (!email || !password) {
      return;
    }
    $(this.refs.submitButton).addClass('disabled');

    this.props.login({
      email: email,
      password: password
    });
  }
  render() {
    return (
      <div className="center-form-wrapper text-center">
        <div className="inline-block">
          <form className="center-form" onSubmit={(e) => this.handleSubmit(e)}>
            <h3 className="form-title">Reaclate</h3>
            <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)} />
            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} />
            <input ref="submitButton" type="submit" className="btn btn-primary btn-wide full-width" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;