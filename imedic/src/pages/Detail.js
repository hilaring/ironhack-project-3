import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Patient from 'data';
export default class Detail extends Component {
  
  state = {
    patient: {},
    isLoading: true,
  }

  componentDidMount() {
    const { id } = this.props.match.params; 
    Data.getpatient(id)
      .then(({data}) => {
        this.setState({
          patient: data,
          isLoading: false,
        })
      })
  }

  renderInfo = () => {
    const { name, last_name, email,number,adress } = this.state.patient;
    return (
      <Fragment>
        <h3>Name</h3>
        <p>{name}</p>
        <h3>Last Name</h3>
        <p>{last_name}</p>
        <h3>Email</h3>
        <p>{email}</p>
        <h3>Phone Number</h3>
        <p>{number}</p>
        <h3>Adress</h3>
        <p>{adress}</p>
        <Link to="/">Back to home</Link>
      </Fragment>
    );
  }

  render() {
    
    return (
      <div>
        { !this.state.isLoading ? this.renderInfo() : <div>Loading</div>}
      </div>
    )
  }
}
