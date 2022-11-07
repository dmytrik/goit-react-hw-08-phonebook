import React, { useState } from 'react';

import { Form, Label, Property, Input, Submit } from './Form.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleContactChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const submitForm = async e => {
    e.preventDefault();

    setName('');
    setPhone('');
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleContactChange}
          ></Input>
        </Label>
        <Submit type="submit">Add contact</Submit>
      </Form>
    </>
  );
};

export default ContactForm;
