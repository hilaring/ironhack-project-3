import React, { Component } from 'react'
import styled from 'styled-components';

const Heading = styled.div `
  color: #f2f2f2;
  font-size: 26px;
  text-align: center;
  padding-top 15px;
  padding-bottom: 5px;
  justify-content: middle;
  background-color: #6D7AE0;
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
