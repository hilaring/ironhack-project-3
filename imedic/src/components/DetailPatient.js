import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Patients from '../lib/patients-service';
import FormEditPatient from './FormEditPatient';
import ListHistory from './ListHistory';

class DetailPatient extends Component {
  state = {
    patient: {},
    isLoading: true,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Patients.getPatient(id)
      .then(({ data }) => {
        this.setState({
          patient: data,
          isLoading: false,
        })
      })
  }

  renderInfo = () => {
    return (
      <Fragment>
        <div id="listh">
          <ListHistory />
        </div>
        < div id="privated">
          <FormEditPatient />
        </ div>
        <Link class="link" to="/">Back to home</Link>
       
      </Fragment>
    );
  }

  render() {

    return (
      <div>
        {!this.state.isLoading ? this.renderInfo() : <div>Loading</div>}
      </div>
    )
  }
}
export default DetailPatient;