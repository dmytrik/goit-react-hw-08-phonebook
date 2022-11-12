import { useSelector } from 'react-redux';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from '../Form/Form';
import { Title } from '../Phonebook.styled';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      {contacts.length > 0 && <Filter />}
      <ContactsList />
    </>
  );
};

export default Contacts;
