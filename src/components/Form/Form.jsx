import React, { useState } from 'react';
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Property, Input, Submit } from './Form.styled';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleContactChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitForm = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setName('');
    setNumber('');
    addContact(newContact);
  };

  return (
    <>
      <Form onSubmit={submitForm}>
        <Label>
          <Property>Name</Property>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleContactChange}
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
            onChange={handleContactChange}
          ></Input>
        </Label>
        <Submit type="submit">Add contact</Submit>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  addContact: propTypes.func.isRequired,
};

export default ContactForm;
