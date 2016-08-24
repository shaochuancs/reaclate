"use strict";

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var api = require('../../common/api');

var LoginForm = React.createClass({
  getInitialState: function() {
    return {email: '', password: ''};
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    if (!email || !password) {
      return;
    }
    $(this.refs.submitButton).addClass('disabled');

    $.post(api.LOGIN, function() {
      browserHistory.push('/react-router/my-account');
    });
  },
  render: function(){
    return (
      <div className="center-form-wrapper text-center">
        <div className="inline-block">
          <form className="center-form" onSubmit={this.handleSubmit}>
            <h3 className="form-title">Reaclate</h3>
            <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
            <input ref="submitButton" type="submit" className="btn btn-primary btn-wide full-width" value="Login" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = LoginForm;