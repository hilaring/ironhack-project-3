import React, { Component } from 'react';
import ListPatients from '../components/ListPatients';

class Private extends Component {
  render() {
    console.log(this.props)
    return (
      <div id='private'>
        <ListPatients patient={this.props.selectedPatient} changePatient={this.props.selectedPatient}/>
      </div>
    )
  }
}
export default Private;