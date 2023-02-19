import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
  render() {
    return <StyledBtn type="submit">Add contact</StyledBtn>;
  }
}

export default Button;

export const StyledBtn = styled.button`
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: green;
    color: yellow;
  }

  width: 100px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  color:blue;
  background-color:yellow;
  border-radius: 5px;
  border-color: blue;

`;