import React, { Component } from 'react'
import Search from './components/Search';
import FormPatient from './FormPatient';
import Patient from './components/Patient';

class CreatePatient extends Component {
    constructor(){
        super()
        this.state = {
          newPatient: [],
          formShowing: false,
        }
      }
    
      onSubmit = (value) => {
        console.log('', value)
        const newPatient = this.state.patient
        newPatient.push(value)
        this.setState({
          patient: newPatient
        })
      }
      toggleForm = () => {
        this.setState({
          formShowing: !this.state.formShowing
        })
        console.log(this.state.formShowing)
      }
      searchPatient = (words) => {
        console.log("", words)
        var modifiedList = Patient.filter(word => word.name.toLowerCase().includes(words.toLowerCase()))
        this.setState({
          patient: modifiedList
        });
      }
  render() {
    const eachPatient = this.state.patient.map((patient, index) => {
        return <Patient name={patient.name} last_name={patient.last_name} email={patient.email} number={patient.number} adress={patient.adress} />
      });
    return (
      <div>
          <div>
           <Search searchPatient={patient => this.searchPatient(patient)} />
            <div className="add-new">
              <button
                onClick={() => this.toggleForm()}
                className="button is-info toggle-btn">
                {this.state.formShowing ? 'Hide The Form' : 'Show Me The Form'}
              </button>
              {this.state.formShowing && <FormPatient onSubmit={value => this.onSubmit(value)} />}
            </div>
            {eachPatient}
      </div>
      </div>
    )
  }
}
export default CreatePatient;