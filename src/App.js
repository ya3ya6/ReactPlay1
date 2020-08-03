import React from 'react';
import './App.css';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';

let Login = () => (
  <form>
    <h3>Login</h3>
    <p>
      <input name="email" placeholder="email" />
    </p>
    <p>
      <input name="password" placeholder="password" />
    </p>
    <p>
      <input type="button" value="Login" />
    </p>
  </form>
)

let Signup = (props) => {
  let {state: {name, email, password}, onNameUpdate, onEmailUpdate, onPasswordUpdate} = props
  return (
    <form>
      <h3>Signup</h3>
      <p>
        <input type="text" name="name" placeholder="name" value={name} onChange={(e) => {onNameUpdate(e.target.value)}} />
      </p>
      <p>
        <input type="email" required name="email" placeholder="email" value={email} onChange={(e) => {onEmailUpdate(e.target.value)}} />
      </p>
      <p>
        <input type="password" name="password" placeholder="password" password={password} onChange={(e) => {onPasswordUpdate(e.target.value)}} />
      </p>
      <p>
        <input type="button" value="Sign up" />
      </p>
    </form>
  )
}

let Profile = (props) => (
  <div>
    <h3>Profile</h3>
    <div>{props.currentUser.name}</div>
  </div>
)
    
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: '',
      signupForm: {
        name: '',
        email: '',
        password: '',
      }
    }
  }
  componentDidMount(){
  }
  onNameUpdate(name){
    this.setState({signupForm: ({...this.state.signupForm, name})})
  }
  onEmailUpdate(email){
    this.setState({signupForm: ({...this.state.signupForm, email})})
  }
  onPasswordUpdate(password){
    this.setState({signupForm: ({...this.state.signupForm, password})})
  }
  
  render(){
    let {currentUser, signupForm} = this.state;
    return (
      <Router>
        <div>
          <header>
            <nav>
              <div className="container">
                <Link to="/login" >Login</Link>
                <Link to="/signup" >Signup</Link>
                <Link to="/profile" >Profile</Link>
              </div>
            </nav>
          </header>
          <div className="container">
            <Switch>
              <Route path="/login" render={Login} />
              <Route path="/signup" render={() => (
                <Signup 
                  state={signupForm}
                  onNameUpdate={this.onNameUpdate.bind(this)}
                  onEmailUpdate={this.onEmailUpdate.bind(this)}
                  onPasswordUpdate={this.onPasswordUpdate.bind(this)}
                />
              )} />
              <Route path="/profile" render={() => (<Profile currentUser={currentUser} />)} />

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
