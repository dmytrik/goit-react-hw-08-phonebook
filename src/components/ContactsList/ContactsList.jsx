import {
  ContactsBox,
  List,
  ContactsItem,
  ContactsBtn,
} from './ContactsList.styled';
import operation from '../../redux/store/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ContactsList = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.user.name);
  const contacts = useSelector(state => state.contacts.items);
  useEffect(() => {
    if (!userName) {
      return;
    }
    dispatch(operation.getContacts());
  }, [dispatch, userName]);

  return (
    <ContactsBox>
      <List>
        {contacts.map(({ name, number }) => {
          return (
            <ContactsItem key={Date.now()}>
              {name} - {number}
              <ContactsBtn>Delete</ContactsBtn>
              <ContactsBtn>Change</ContactsBtn>
            </ContactsItem>
          );
        })}
      </List>
    </ContactsBox>
  );
};
export default ContactsList;
