import { PhoneList, PhoneContact, DeleteContact } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store/contactsSlice';

export default function ContactsList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();
  const delContact = (e, id) => {
    e.target.style.backgroundColor = 'blue';
    dispatch(deleteContact(id));
  };

  return (
    <>
      <PhoneList>
        {visibleContacts.map(({ id, name, phone }) => {
          return (
            <PhoneContact key={id}>
              {name} : {phone}
              <DeleteContact
                type="button"
                onClick={e => {
                  delContact(e, id);
                }}
              >
                Delete
              </DeleteContact>
            </PhoneContact>
          );
        })}
      </PhoneList>
    </>
  );
}
