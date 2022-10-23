import React from 'react';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './Form/Form';
import Filter from './Filter/Filter';
import { Title, ContactsListTitle } from './Phonebook.styled';

const App = () => {
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
