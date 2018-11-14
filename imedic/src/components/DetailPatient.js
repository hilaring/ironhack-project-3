import React, { Component, Fragment } from "react";
import Patients from "../lib/patients-service";
import FormEditPatient from "./FormEditPatient";
import FormCreateHistory from "./FormCreateHistory";
import ListHistory from "./ListHistory";

class DetailPatient extends Component {
  state = {
    patient: {},
    isLoading: true,
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    Patients.getPatient(id).then(({ data }) => {
      this.setState({
        patient: data,
        isLoading: false
      });
    });
  }

  changePatient = (historyPatient) => {
    const { id } = this.props.match.params;
    console.log(' ', historyPatient);

    Patients.addHistory(id, historyPatient)
      .then((data)=>{
        console.log('', data)
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  
  renderInfo = () => {
    console.log(this.props);
    return (
      
      <Fragment>
        <div className="box-detail-patient">  
          <FormEditPatient />
        </div>
        <div className="box-detail-patient">  
          <ListHistory patient={this.state.patient}/>
        </div>
        <div className="box-detail-patient">  
          <FormCreateHistory changePatient={this.changePatient}/>
        </div>
        </Fragment>
      
    );
  };

  render() {
    return (
      <div className="patients-container">
        {!this.state.isLoading ? this.renderInfo() : <div>Loading</div>}
      </div>
    );
  }
}
export default DetailPatient;
