import React, { Component } from 'react';
import Search from '../components/Search';
import FormPatient from '../components/FormPatient';
import ListPatient from '../components/ListPatients';
class Private extends Component {
  render() {
    return (
      <div>
      <div id='private'>
        <Search/><br></br>
        <FormPatient/><br></br>
        <ListPatient/>
      </div>
      </div>
    )
  }
}
export default Private;