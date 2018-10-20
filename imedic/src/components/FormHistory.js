import React, {Component} from 'react'
 class FormHistory extends Component{
  state = {
    syntoms: '',
    disease: '',
    prescription: '',
   
  }
  onSubmit = (e) =>{
    e.preventDefault()
    
    this.setState({
        syntoms: '',
        disease: '',
        prescription: '',
       
    })
    this.props.onSubmit(this.state)
  }
  render(){
    const { syntoms, disease, prescription } = this.state;
    return(
      <form>
          <input placeholder="syntoms" name={syntoms} value={this.state.syntoms} onChange={e => this.setState({syntoms: e.target.value})}  />
          <br/>
           <input placeholder="disease" name={disease} value={this.state.disease} onChange={e => this.setState({disease: e.target.value})}  />
          <br/>
          <input placeholder="prescription" name={prescription} value={this.state.prescription} onChange={e => this.setState({prescription: e.target.value})}  />
          <br/>
          <button type="submit" onClick={e => this.onSubmit(e)} >Submit</button>
          <br/>
      </form>
     )
  }
}
export default FormHistory;