import { PhoneList, PhoneContact, DeleteContact } from './ContactsList.styled';
import propTypes from 'prop-types';

export default function ContactsList({ phoneList, deleteContact }) {
  return (
    <>
      <PhoneList>
        {phoneList.map(({ id, name, number }) => (
          <PhoneContact key={id}>
            {name} : {number}
            <DeleteContact type="button" data-id={id} onClick={deleteContact}>
              Delete
            </DeleteContact>
          </PhoneContact>
        ))}
      </PhoneList>
    </>
  );
}
ContactsList.propTypes = {
  phoneList: propTypes.arrayOf(propTypes.object).isRequired,
  deleteContact: propTypes.func.isRequired,
};
