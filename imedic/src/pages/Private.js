import React, { Component } from 'react';
import Search from '../components/Search';
import FormPatient from '../components/FormPatient';
import ListPatients from '../components/ListPatients';
// import patients from '../lib/patients-service';

class Private extends Component {
  render() {
    return (
      <div>
      <div id='private'>
        <Search/><br></br>
        <FormPatient/><br></br>
        <ListPatients/>
      </div>
      </div>
    )
  }
}
export default Private;