import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../lib/patients-service';
import { FaSearch } from 'react-icons/fa';



class ListPatients extends Component {

  state = {
    patients: [],
    isLoading: true,
  }

  componentDidMount() {
    Api.getPatients()
    .then((data) => {
<<<<<<< HEAD
        console.log(data);
=======

>>>>>>> f4ee4d71d61022bcccf7ad1962c1e818954f4341
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
<<<<<<< HEAD
        {name} - <Link to={`patients/${_id}`}>{last_name}</Link> 
      </li>)
=======
        {name} {last_name} <Link to={`/patients/${_id}`}><FaSearch /></Link> 
      </li>
    )
>>>>>>> f4ee4d71d61022bcccf7ad1962c1e818954f4341
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