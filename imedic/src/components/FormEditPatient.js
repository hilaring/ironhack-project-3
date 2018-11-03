import React, { Component } from 'react';
import Api from '../lib/patients-service';
import { withRouter } from "react-router-dom";

class FormEditPatient extends Component {

  state = {
    name: '',
    last_name: '',
    email: '',
    number: '',
    adress: '',
  }

  componentDidMount() {
    //una vez montado el componente pido los datos
    const { id } = this.props.match.params;
    Api.getPatient(id)
      .then(({ data }) => {
        const { name, last_name, email, number, adress } = data
        this.setState({
          name,
          last_name,
          email,
          number,
          adress,
        })
      })
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { name, last_name, email, number, adress } = this.state
    Api.editPatient(id, { name, last_name, email, number, adress })
      .then((result) => {
        this.props.history.push(`/patients/${id}`)
        window.location.reload();
      })
      .catch((error) => { console.log(error) })
  }

  render() {
    const { name, last_name, email, number, adress } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1 className="register-title">Patient information</h1>
          <label className="label" htmlFor="">Name</label>
          <input className="register-input" type="text" value={name} name="name" onChange={this.handleOnChange} placeholder="Name" />
          <label className="label" htmlFor="">Last name</label>
          <input className="register-input" type="text" value={last_name} name="last_name" onChange={this.handleOnChange} placeholder="Last Name" />
          <label className="label " htmlFor="">Email</label>
          <input className="register-input" type="text" value={email} name="email" onChange={this.handleOnChange} placeholder="Email" />
          <label className="label" htmlFor="">Phone number</label>
          <input className="register-input" type="number" value={number} name="number" onChange={this.handleOnChange} placeholder="Number" />
          <label className="label" htmlFor="">Adress</label>
          <input className="register-input" type="text" value={adress} name="adress" onChange={this.handleOnChange} placeholder="Adress" />
          <input className="register-button" type="submit" value="Edit" />
        </form>
      </div>
    )
  }
}
export default withRouter(FormEditPatient);
