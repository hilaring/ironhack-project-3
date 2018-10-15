import React, { Component } from 'react';
import Search from '../components/Search';
import FormPatient from '../components/FormPatient';

export default class Private extends Component {
  render() {
    return (
      <div>
      <div>
        Private
        </div>
        <div>
        <Search/>
        <FormPatient/>
      </div>
      </div>
    )
  }
}
