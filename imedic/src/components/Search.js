import React, { Component } from 'react';
 class Search extends Component {
  constructor(props){
    super(props)
    this.state ={
      search: ''
    }
  }
  updateSearch = (event) =>{
    const {name} = event.target
    this.setState({
      search: name
    })
    this.props.searchPatients(name)
  }
  render(){
    return(
      <div>
        <input type="text" name={this.state.search} placeholder="Search for Patients" onChange={this.updateSearch.bind(this)} />
      </div>
    )
  }
}
 export default Search;