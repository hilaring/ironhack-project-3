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
    console.log('button')
    e.preventDefault();
    //espera el objeto que le viene del body
    const { name, last_name, email, number, adress } = this.state
    Api.createPatient({ name, last_name, email, number, adress })
      .then((result) => {
        console.log('done: ', result)
        //redirecciona al enviar
       this.props.history.push(`/`)
      })
      .catch((error) => { console.log(error) })
  }

  render() {
    const { name, last_name, email, number, adress } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" value={name} name="name" onChange={this.handleOnChange} />
          <label htmlFor="">Last name</label>
          <input type="text" value={last_name} name="last_name" onChange={this.handleOnChange} />
          <label htmlFor="">Email</label>
          <input type="text" value={email} name="email" onChange={this.handleOnChange} />
          <label htmlFor="">Phone number</label>
          <input type="number" value={number} name="number" onChange={this.handleOnChange}/>
          <label htmlFor="">Adress</label>
          <input type="text" value={adress} name="adress" onChange={this.handleOnChange} />
          <input type="submit" value="create"/>
        </form>
      </div>
    )
  }
}


export default withRouter(NewPatient);