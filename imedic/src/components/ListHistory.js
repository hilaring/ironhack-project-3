import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit ,FaEraser } from 'react-icons/fa';
import Api from '../lib/history-service';


class ListHistory extends Component {

  state = {
    histories: [],
    isLoading: true,
  }
  

  handleDelete = (id) => {
    Api.deleteHistory(id)
      .then(()=> {
        // no funciona
        //this.getHistory()
       this.props.history.push('/')
        window.location.reload()
      })
      .catch(error => console.log(error))
  }


  componentDidMount() {
    Api.getHistories()
    .then((data) => {
      console.log(data)
        this.setState({
          histories: data,
          isLoading: false,
        })
      })
      .catch((error) => console.log("Error: ", error)) 
  }

  renderList = () => {
    return this.state.histories.map(({ _id, syntoms, disease, prescription }) => 
      <ul key={_id}>
      <li>Síntomas: {syntoms}<br/></li>
      <li>Enfermedad: {disease}<br/></li>
      <li>Prescripción: {prescription}</li>
      <hr/>
      </ul>
    )
  }

  render() {   
    return (
      <div id="private">
        <h1>Historial Medico</h1>
        <ul>
          {this.state.isLoading ? <h1>Loading</h1> : this.renderList()} 
        </ul>
      </div>
    )
  }
}

export default ListHistory;