import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../store/store';
import { push } from 'react-router-redux';
import { loginLoadCurrentUser } from '../reducers/loginReducer';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
     [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.props.loginLoadCurrentUser(email, password)
    // history.push('/feed')
  }

  render(props) {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input 
            type="email" 
            name="email"
            value={this.state.email} 
            onChange={this.handleChange} 
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginLoadCurrentUser: (email, password) => dispatch(loginLoadCurrentUser(email, password))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)