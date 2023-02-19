import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledBtn } from 'components/Button/Button';

class Contacts extends Component {
  render() {
    const { nameList, onClick } = this.props;
    return (
      <ul>
        {nameList.map(({ name, id, number }) => (
          <li key={id}>
            <p>
              {name}: {number}{' '}
              <StyledBtn onClick={() => onClick(id)} type="button">
                Delete
              </StyledBtn>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;

Contacts.propTypes = {
  nameList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};