import React, { Component } from 'react';
import Search from '../components/Search';
import FormPatient from '../components/FormPatient';
import Lista from '../pages/Lista';
class Private extends Component {
  render() {
    return (
      <div>
      <div id='private'>
        Private<br></br><br></br>
        <Search/><br></br>
        <FormPatient/><br></br>
        <Lista/>
      </div>
      </div>
    )
  }
}
export default Private;