import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import DetailPatient from './components/DetailPatient';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Title from './components/Title';
import auth from './lib/auth-service';
import './style/main.css';

class App extends Component {

  state = {
    isLogged: false,
    user: {},
    status: 'loading',
    selectedPatient: {},
  }

  setUser = (user) => {
    this.setState({
      isLogged: true,
      user,
    })
  }

  logoutUser = () =>{
    auth.logout()
      .then(() => {
        this.setState({ 
          isLogged: false,
          user: {},
        });
      })
      .catch( error => console.log(error))
  }

  selectedPatient = (patient) => {
    console.log("hola", patient);
    this.setState({
      selectedPatient: patient,
    })
  }

  componentDidMount() {
    auth.me()
      .then((user) => {
        this.setState({
          isLogged: true,
          user,
          status: 'loaded'
        })
      })
      .catch((error) => {
        this.setState({ 
          isLogged: false,
          user: {},
          status: 'loaded'
        });
      })
  }

  render() {
    const { isLogged, user, status, selectedPatient } = this.state;
    switch (status) {
      case 'loading':
        return <div>Loading</div>
      default:
        return (
            <Fragment>
              <Title />
              <div className="contenedor">
              <Navbar isLogged={isLogged} user={user} logoutUser={this.logoutUser} />  
              <Switch className="test">
                <AnonRoute path="/signup" component={Signup} setUser={this.setUser} isLogged={isLogged} />
                <AnonRoute path="/login" component={Login} setUser={this.setUser} isLogged={isLogged} />
                <PrivateRoute exact path="/" component={Private} isLogged={isLogged} user={user} patient={selectedPatient} changePatient={this.selectedPatient}/>
                <PrivateRoute path='/patients/:id' component={DetailPatient} isLogged={isLogged} user={user} patient={selectedPatient} changePatient={this.selectedPatient}/>
              </Switch>
              </div>
            </Fragment>
        );
        
    }
  }
}

export default App;