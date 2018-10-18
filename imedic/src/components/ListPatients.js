import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../lib/patients-service';


class ListPatients extends Component {

  state = {
    patients: [],
    isLoading: true,
  }

  componentDidMount() {
    Api.getPatients()
    .then((data) => {
        console.log("Joder")
        console.log(data);
        this.setState({
          patients: data,
          isLoading: false,
        })
      })
      .catch((error) => console.log("Error: ", error)) 
  }

  renderList = () => {
    return this.state.patients.map(({ name, last_name, _id }) => 
      <li key={_id}>
        {name} - <Link to={`/patients/${_id}`}>{last_name}</Link> 
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

export default ListPatients;