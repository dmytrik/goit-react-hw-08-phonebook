import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from '../Form/Form';
import { Title } from '../Phonebook.styled';

const Contacts = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsList />
    </>
  );
};

export default Contacts;
