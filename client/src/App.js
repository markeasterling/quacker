import React, { Component } from 'react';
import { loginFetchToken } from './reducers/loginReducer';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
        <button onClick={() => (localStorage.removeItem('token'))}>delete storage</button>
      </div>
    );
  }
}

export default App;
