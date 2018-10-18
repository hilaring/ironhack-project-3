import React, { Component } from 'react';
import DetailPatient from '.components./Form';

 class EditPatient extends Component {
  render() {
    return (
      <div>
        <h1>Edit</h1>
        <DetailPatient/>
      </div>
    )
  }
}
export default EditPatient;