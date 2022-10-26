import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/store/contactsSlice';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './Form/Form';
import Filter from './Filter/Filter';
import { Title, ContactsListTitle } from './Phonebook.styled';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  });
  if (error !== null) {
    return <h1>Упс, щось пішло не так, спробуйте перезавантажити сторінку</h1>;
  }
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsListTitle>Contacts</ContactsListTitle>
      <Filter />
      <ContactsList />
    </>
  );
};

export default App;
