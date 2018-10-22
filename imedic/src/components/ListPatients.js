import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Api from '../lib/patients-service';
import FormCreatePatient from './FormCreatePatient'

class ListPatients extends Component {

  state = {
    patients: [],
    isLoading: true,
  }
  

  handleDelete = (id) => {
    Api.deletePatient(id)
      .then(()=> {
        // no funciona
        // this.props.history.push('/')
        this.getPatients()
      })
      .catch(error => console.log(error))
  }


  componentDidMount() {
    Api.getPatients()
    .then((data) => {
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
        {name} {last_name} <Link to={`/patients/${_id}`}><FaSearch /></Link> 
        <button onClick={() => this.handleDelete(_id)}>Delete</button>
      </li>
    )
  }

  render() {   
    return (
      <div>
        <h1>Listado de Pacientes</h1>
        <ul>
          {this.state.isLoading ? <h1>Loading</h1> : this.renderList()} 
        </ul>
        <FormCreatePatient />
      </div>
    )
  }
}

export default ListPatients;