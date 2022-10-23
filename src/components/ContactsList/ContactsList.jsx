import { PhoneList, PhoneContact, DeleteContact } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/store/contactsSlice';

export default function ContactsList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();
  const deleteContact = (e, id) => {
    e.target.style.backgroundColor = 'blue';
    setTimeout(() => {
      dispatch(removeContact({ id }));
    }, 500);
  };

  return (
    <>
      <PhoneList>
        {visibleContacts.map(({ id, name, number }) => (
          <PhoneContact key={id}>
            {name} : {number}
            <DeleteContact
              type="button"
              onClick={e => {
                deleteContact(e, id);
              }}
            >
              Delete
            </DeleteContact>
          </PhoneContact>
        ))}
      </PhoneList>
    </>
  );
}
