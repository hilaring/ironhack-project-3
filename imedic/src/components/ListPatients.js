import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaTrash } from 'react-icons/fa';
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
        {name} {last_name}
        <button className="delete" onClick={() => this.handleDelete(_id)}><FaTrash /></button>
        <button className="delete"><Link to={`/patients/${_id}`}><FaRegEye/></Link></button>
      </li>
    )
  }

  render() {
    return (
      <div className="patients-container">
        <div className="box-container">
          <div className="register">
            <h1 className="box-title">My patients</h1>
            <ul className="list-patients">
              {this.state.isLoading ? <h1>Loading</h1> : this.renderList()}
            </ul>
          </div>
        </div>
        <div className="box-container">
          <FormCreatePatient/>
        </div>
      </div>
    )
  }
}

export default ListPatients;