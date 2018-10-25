import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit ,FaEraser } from 'react-icons/fa';
import Api from '../lib/history-service';
import FormCreateHistory from './FormCreateHistory';

class ListHistory extends Component {

  state = {
    histories: [],
    isLoading: true,
  }
  

  handleDelete = (id) => {
    Api.deleteHistory(id)
      .then(()=> {
        // no funciona
       //this.props.history.push('/')
        this.getHistory()
      })
      .catch(error => console.log(error))
  }


  componentDidMount() {
    Api.getHistory()
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
    return this.state.histories.map(({ syntoms, disease, prescription, _id }) => 
      <li key={_id}>
        {syntoms} {disease} {prescription} <Link to={`/historys/${_id}`}><FaEdit />Edit</Link> 
        <button onClick={() => this.handleDelete(_id)}><FaEraser/>Delete</button>
      </li>
    )
  }

  render() {   
    return (
      <div id="private">
        <h1>Historial Medico</h1>
        <ul>
          {this.state.isLoading ? <h1>Loading</h1> : this.renderList()} 
        </ul>
        <FormCreateHistory />
      </div>
    )
  }
}

export default ListHistory;