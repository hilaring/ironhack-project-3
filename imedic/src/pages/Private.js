import React, { Component } from 'react';
import ListPatients from '../components/ListPatients';

class Private extends Component {
  render() {
    return (
      <div>
      <div id='private'>
        <ListPatients/>
      </div>
      </div>
    )
  }
}
export default Private;