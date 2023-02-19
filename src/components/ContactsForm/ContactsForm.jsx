import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();

    const form = e.target;
    onSubmit(this.state.name, this.state.number, form);

    form.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const nameId = nanoid();
    const numberId = nanoid();

    return (
      <StyledForm onSubmit={this.handleSubmit} onReset={this.reset}>
        <label htmlFor={nameId}>Name</label>
        <StyledInput
          onChange={this.onInputChange}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameId}
        />

        <label htmlFor={numberId}>Number</label>
        <StyledInput
          id={numberId}
          onChange={this.onInputChange}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button />
      </StyledForm>
    );
  }
}

export default ContactsForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};