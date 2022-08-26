import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: "opscami@outlook.com",
      validPassword: "123456",
      email: "",
      password: "",
      feedback: ""
    }

    this.validateLogin = this.validateLogin.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  validateLogin(event) {
    
    let message = "Usuário ou senha incorretos!";
    if (this.state.email === this.state.validEmail &&
        this.state.password === this.state.validPassword) {
          message = "Acessado com sucesso!";
    }

    event.preventDefault();
    this.setState({feedback: message})
  }

  inputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {    
    return (
      <div style={{ margin: '25px'}}>
        <h1>Login</h1>
        <form onSubmit={this.validateLogin}>
          <input name="email" type="text" value={this.state.email} onChange={this.inputChange}/>
          <br/>
          <input name="password" type="password" value={this.state.password} onChange={this.inputChange}/>
          <br/>
          <input type="submit" value="Acessar"/>
        </form>
        <h3>{this.state.feedback}</h3>
      </div>
    );
  }
}

export default App;
