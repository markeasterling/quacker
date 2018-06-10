import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import { loginFetchToken } from './reducers/loginReducer';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import Feed from './containers/Feed';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/feed">feed</Link>
        <Link to="/">home</Link>
        <Link to="/" onClick={() => localStorage.removeItem('token')}>logout</Link>
        <button onClick={() => (localStorage.removeItem('token'))}>delete storage</button>
        <button onClick={() => (console.log(this.props))}>see st8</button>

        <main>
          <Route exact path="/" component={(localStorage.getItem('token') == null) ? LoginForm : Feed} />
          <Route exact path="/feed" component={Feed} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

export default connect(mapStateToProps)(App);
