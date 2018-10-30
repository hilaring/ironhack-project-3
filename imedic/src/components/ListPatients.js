import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaEraser } from 'react-icons/fa';
import Api from '../lib/patients-service';
import FormCreatePatient from './FormCreatePatient';

class ListPatients extends Component {

  state = {
    patients: [],
    isLoading: true,
  }


  handleDelete = (id) => {
    Api.deletePatient(id)
      .then(() => {
        // no funciona
        // this.getPatients()
        this.props.history.push('/')

        window.location.reload()
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
        {name} {last_name} <Link to={`/patients/${_id}`}><FaEdit />Edit</Link>
        <button class="delete" onClick={() => this.handleDelete(_id)}><FaEraser />Delete</button>
      </li>
    )
  }

  render() {
    return (
      <div id="lista2">
<<<<<<< HEAD
=======
        <div class="content-box">
        <h1 class="register-title">My patients</h1>
>>>>>>> dev
        <ul>
        <h1 class="register-title">My patients</h1>
          {this.state.isLoading ? <h1>Loading</h1> : this.renderList()}
        </ul>
<<<<<<< HEAD
        <div id="lista3">
          <FormCreatePatient />
        </div>
          
        
=======
        </div>
        <FormCreatePatient/>
>>>>>>> dev
      </div>
    )
  }
}

export default ListPatients;