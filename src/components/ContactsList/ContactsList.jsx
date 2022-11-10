import {
  ContactsBox,
  List,
  ContactsItem,
  ContactsBtn,
} from './ContactsList.styled';
import operation from '../../redux/store/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const ContactsList = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.user.name);
  const contacts = useSelector(state => state.contacts.items);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!userName) {
      return;
    }
    dispatch(operation.getContacts());
  }, [dispatch, userName]);

  const handleDeleteContact = id => {
    dispatch(operation.deleteContact(id));
  };

  const contactChange = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <ContactsBox>
        <List>
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactsItem key={id}>
                {name} - {number}
                <ContactsBtn
                  type="button"
                  onClick={() => {
                    handleDeleteContact(id);
                  }}
                >
                  Delete
                </ContactsBtn>
                <ContactsBtn type="button" onClick={contactChange}>
                  Change
                </ContactsBtn>
              </ContactsItem>
            );
          })}
        </List>
      </ContactsBox>
      {showModal && <Modal> </Modal>}
    </>
  );
};
export default ContactsList;
