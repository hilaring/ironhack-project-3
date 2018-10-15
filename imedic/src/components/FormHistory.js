import React, {Component} from 'react'
 class FormPatient extends Component{
  state = {
    Syntoms: '',
    disease: '',
    Prescription: '',
   
  }
  onSubmit = (e) =>{
    e.preventDefault()
    
    this.setState({
        Syntoms: '',
        disease: '',
        Prescription: '',
       
    })
    this.props.onSubmit(this.state)
  }
  render(){
    return(
      <form>
          <input placeholder="Syntoms" value={this.state.Syntoms} onChange={e => this.setState({syntoms: e.target.value})}  />
          <br/>
           <input placeholder="Disease" value={this.state.disease} onChange={e => this.setState({disease: e.target.value})}  />
          <br/>
          <input placeholder="Prescriptions" value={this.state.prescriptions} onChange={e => this.setState({prescriptions: e.target.value})}  />
          <br/>
          <button onClick={e => this.onSubmit(e)} >Submit</button>
          <br/>
      </form>
     )
  }
}
 export default FormPatient;