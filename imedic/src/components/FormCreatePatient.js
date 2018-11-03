import React, { Component } from 'react';
import Api from '../lib/patients-service';
import { withRouter } from "react-router-dom";

class NewPatient extends Component {

  state = {
    name: '',
    last_name: '',
    email: '',
    number: '',
    adress: '',
  }

  handleOnChange = (e) => {
    this.setState({
      //seleccionar dinamicamente que coges y cual es su valor
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //espera el objeto que le viene del body
    const { name, last_name, email, number, adress } = this.state
    Api.createPatient({ name, last_name, email, number, adress })
      .then((result) => {
        console.log('', result)
        //redirecciona al enviar

        this.props.history.push(`/private`)
        window.location.reload()
      })
      .catch((error) => { console.log(error) })
  }

  render() {
    const { name, last_name, email, number, adress } = this.state
    return (
      <div className="register">
        <h1 className="box-title">Create Patient</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="register-input" type="text" value={name} name="name" onChange={this.handleOnChange} placeholder="Name" /><br></br>
          <input className="register-input" type="text" value={last_name} name="last_name" onChange={this.handleOnChange} placeholder="Last Name" /><br></br>
          <input className="register-input" type="text" value={email} name="email" onChange={this.handleOnChange} placeholder="Email" /><br></br>
          <input className="register-input" type="number" value={number} name="number" onChange={this.handleOnChange} placeholder="Number" /><br></br>
          <input className="register-input" type="text" value={adress} name="adress" onChange={this.handleOnChange} placeholder="Adress" /><br></br>
          <input className="register-button" type="submit" value="Create" /><br></br>
        </form>
      </div>
    )
  }
}


export default withRouter(NewPatient);