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
        <div className="patients-container">
          <div className="box-containter">
            <div className="register">
            <FormEditPatient />
            </div>
          </div>
        </div>
        <div className="patients-container">
          <div className="register">
            <ListHistory />
          </div>
          {/* <Link className="link" to="/">Back to home</Link> */}
        </div>
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