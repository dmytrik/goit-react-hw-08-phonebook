import React, { Component } from 'react';
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Property, Input, Submit } from './Form.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleContactChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState({ name: '', number: '' });
    this.props.addContact(newContact);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.submitForm}>
          <Label>
            <Property>Name</Property>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleContactChange}
            ></Input>
          </Label>
          <Label>
            <Property>Number</Property>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleContactChange}
            ></Input>
          </Label>
          <Submit type="submit">Add contact</Submit>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: propTypes.func.isRequired,
};

export default ContactForm;
