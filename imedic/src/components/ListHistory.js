import React, { Component } from 'react';
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
        //this.getHistory()
        this.props.history.push('/')
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
      <ul key={_id} className="list-history">
      <li><strong>Syntoms:</strong> {syntoms}<br/></li>
      <li><strong>Disease:</strong> {disease}<br/></li>
      <li><strong>Prescription:</strong> {prescription}</li>
      <hr/>
      </ul>
    )
  }

  render() {   
    return (
      <div id="private">
        <h1 class="register-title">Medical History</h1>
        <ul>
          {this.state.isLoading ? <h1>Loading</h1> : this.renderList()} 
        </ul>
        <FormCreateHistory/>
      </div>
    )
  }
}

export default ListHistory;