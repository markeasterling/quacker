import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginFetchToken } from '../reducers/loginReducer'

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
    console.log(event.target)
    this.setState({
     [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props)
    const email = this.state.email;
    const password = this.state.password;
    this.props.loginFetchToken(email, password)
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
  loginFetchToken: (email, password) => dispatch(loginFetchToken(email, password))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)