import React, { Component } from 'react';
import Api from '../lib/history-service';
import { withRouter } from "react-router-dom";

class NewHistory extends Component {

  state = {
    syntoms: '',
    disease: '',
    prescription: '',
    changePatient:[],
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    Api.createHistory({  })
      .then((result) => {
        console.log('', result)
        this.props.history.push(`/`)
        window.location.reload()

      })
      .catch((error) => { console.log(error) })
  }

  render() {
    const { syntoms, disease, prescription } = this.state
    return (
      <div className="register">
       <h1 className="box-title">Create History</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="register-input" type="text" value={syntoms} name="syntoms" onChange={this.handleOnChange} placeholder="Syntoms"/>
          <input className="register-input" type="text" value={disease} name="disease" onChange={this.handleOnChange} placeholder="Disease"/>
          <input className="register-input" type="text" value={prescription} name="prescription" onChange={this.handleOnChange} placeholder="Prescription"/>
          <button  className="register-button" onClick={() => {this.props.changePatient({syntoms: syntoms, disease: disease, prescription: prescription})}}>Create</button>
        </form>
      </div>
    )
  }
}


export default withRouter(NewHistory);