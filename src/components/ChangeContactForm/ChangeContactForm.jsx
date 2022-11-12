import {
  Form,
  Input,
  Label,
  Property,
  Submit,
} from './ChangeContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/store/contacts-operations';

const ChangeContactForm = ({ currentContact, closeModal }) => {
  const { id, name, number } = currentContact;
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const dispatch = useDispatch();

  const handleContactChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setNewName(value);
        break;
      case 'number':
        setNewNumber(value);
        break;
      default:
        return;
    }
  };

  const changeContact = async e => {
    e.preventDefault();
    const changedContact = {
      id,
      name: newName,
      number: newNumber,
    };
    await dispatch(operations.changeContact(changedContact));
    closeModal(state => !state);
  };

  return (
    <Form onSubmit={changeContact}>
      <Label>
        <Property>Name</Property>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={newName}
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
          value={newNumber}
          onChange={handleContactChange}
        ></Input>
      </Label>
      <Submit type="submit">ChangeContact</Submit>
    </Form>
  );
};
export default ChangeContactForm;
