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

  componentDidMount(){
    //una vez montado el componente pido los datos
    const { id } = this.props.match.params;
    Api.getPatient(id)
      .then(({ data }) => {
        const { name, last_name, email,number,adress } = data
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
    const { name, last_name, email,number,adress } = this.state
    Api.editPatient(id, { name, last_name, email, number, adress })
      .then((result) => {
        this.props.history.push(`/`)
        window.location.reload()
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
            <input type="number" value={number} name="number" onChange={this.handleOnChange} />
            <label htmlFor="">Adress</label>
            <input type="text" value={adress} name="adress" onChange={this.handleOnChange} />
            <input type="submit" value="Update" />
          </form>
        </div>
    )
  }
}
export default withRouter(FormEditPatient);
