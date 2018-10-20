import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../lib/patients-service';
import { FaSearch } from 'react-icons/fa';



class ListHistory extends Component {

  state = {
    histories: [],
    isLoading: true,
  }

  componentDidMount() {
    Api.getHistories()
    .then((data) => {

        this.setState({
          histories: data,
          isLoading: false,
        })
      })
      .catch((error) => console.log("Error: ", error)) 
  }

  renderList = () => {
    return this.state.histories.map(({ syntoms, disease, _id }) => 
      <li key={_id}>
        {syntoms} {disease} <Link to={`/patients/${_id}`}><FaSearch /></Link> 
      </li>
    )
  }

  render() {   
    return (
      <div>
        <h1>Historiales Medicos</h1>
        <ul>
          {this.state.isLoading ? <h1>Loading</h1> : this.renderList()} 
        </ul>
      </div>
    )
  }
}

export default ListHistory;