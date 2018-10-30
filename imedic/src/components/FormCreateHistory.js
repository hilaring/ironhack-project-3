import React, { Component } from 'react';
import Api from '../lib/history-service';
import { withRouter } from "react-router-dom";

class NewHistory extends Component {

  state = {
    syntoms: '',
    disease: '',
    prescription: '',
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
    const { syntoms, disease, prescription} = this.state
    console.log('data', syntoms, disease, prescription)

    Api.createHistory({ syntoms, disease, prescription })
      .then((result) => {
        console.log('', result)
        //redirecciona al enviar
       this.props.history.push(`/`)
       window.location.reload()
      })
      .catch((error) => { console.log(error) })
  }

  render() {
    const { syntoms, disease, prescription } = this.state
    return (
      <div>
        <h1>Create History</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Syntoms</label>
          <input type="text" value={syntoms} name="syntoms" onChange={this.handleOnChange} />
          <label htmlFor="">Disease</label>
          <input type="text" value={disease} name="disease" onChange={this.handleOnChange} />
          <label htmlFor="">Prescription</label>
          <input type="text" value={prescription} name="prescription" onChange={this.handleOnChange} />
           <input type="submit" value="create"/>
        </form>
      </div>
    )
  }
}


export default withRouter(NewHistory);