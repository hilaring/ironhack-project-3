import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Patient from 'data';
class Home extends Component {

  state = {
    patient: [],
    isLoading: true,
  }

  componentDidMount() {
    Data.getpatient()
      .then((data) => {
        console.log(data);
        this.setState({
          patient: data,
          isLoading: false
        })
      })
      .catch((error) => {

      })
  }

  renderList = () => {
    return this.state.patient.map(({ name, last_name, _id }) => 
      <li key={_id}>
        {name} - <Link to={`/patient/${_id}`}>{last_name}</Link> 
      </li>)
  }

  render() {   
    return (
      <div>
        <h1>Listado de Pacientes</h1>
        <ul>
          {this.state.isLoading ? <h1>Loading</h1> : this.renderList()}
        </ul>
      </div>
    )
  }
}

export default Home;