import React, { Component } from "react";
import Api from "../lib/history-service";
import FormCreateHistory from "./FormCreateHistory";
const moment = require("moment");

class ListHistory extends Component {
  state = {
    histories: [],
    isLoading: true
  };

  handleDelete = id => {
    Api.deleteHistory(id)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    Api.getHistories()
      .then(data => {
        console.log(data);
        this.setState({
          histories: data,
          isLoading: false
        });
      })
      .catch(error => console.log("Error: ", error));
  }

  renderList = () => {
    return this.state.histories.map(
      ({ _id, created_at, syntoms, disease, prescription }) => (
        <div className="list-history">
        <ul key={_id}>
          <li>
            <strong>Visit:</strong>
            {moment(created_at).format(" MMMM Do, YYYY .")}
          </li>
          <li>
            <strong>Syntoms:</strong> {syntoms}
            <br />
          </li>
          <li>
            <strong>Disease:</strong> {disease}
            <br />
          </li>
          <li>
            <strong>Prescription:</strong> {prescription}
          </li>
          <hr />
        </ul>
        </div>
      )
    );
  };

  render() {
    return (
      <div className="register">
        <h1 className="box-title">Medical History</h1>
        <ul>{this.state.isLoading ? <h1>Loading</h1> : this.renderList()}</ul>
      </div>
    );
  }
}

export default ListHistory;
