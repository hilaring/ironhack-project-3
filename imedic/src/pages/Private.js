import React, { Component } from 'react';
import ListPatients from '../components/ListPatients';

class Private extends Component {
  render() {
    return (
      <div id='private'>
        <ListPatients/>
      </div>
    )
  }
}
export default Private;