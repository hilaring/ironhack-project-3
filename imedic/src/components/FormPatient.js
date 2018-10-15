import React, {Component} from 'react'
 class FormPatient extends Component{
  state = {
    name: '',
    last_name: '',
    email: '',
    number: '',
    adress:'',
  }
  onSubmit = (e) =>{
    e.preventDefault()
    
    this.setState({
      name: '',
      last_name: '',
      email: '',
      number: '',
      adress:'',
    })
    this.props.onSubmit(this.state)
  }
  render(){
    return(
      <form>
          <input placeholder="Name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}  />
          <br/>
           <input placeholder="Last-name" value={this.state.last_name} onChange={e => this.setState({last_name: e.target.value})}  />
          <br/>
          <input placeholder="Email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}  />
          <br/>
          <input placeholder="Number" value={this.state.number} onChange={e => this.setState({number: e.target.value})}  />
          <br/>
          <input placeholder="Adress" value={this.state.adress} onChange={e => this.setState({adress: e.target.value})}  />
          <br/>
          <button onClick={e => this.onSubmit(e)} >Submit</button>
          <br/>
      </form>
     )
  }
}
 export default FormPatient;
