import React, { Component } from 'react'
import styled from 'styled-components';

const Heading = styled.div `
  color: black;
  font-size: 22px;
  text-align: center;
  padding-top 15px;
  padding-bottom: 5px;
  justify-content: middle;
  background-color: white;
  border-bottom: 1px solid black;
  height: 40px;
  witdh: 100%;
`

export default class Title extends Component {
  render() {
    return (
      <Heading>
        i<b>m</b>edic
      </Heading>
    )
  }
}
