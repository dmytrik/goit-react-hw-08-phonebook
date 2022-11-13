import { Item, ContactsBtn } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({
  name,
  number,
  handleDeleteContact,
  contactChange,
  id,
}) => {
  return (
    <Item>
      {name} - {number}
      <ContactsBtn
        type="button"
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        Delete
      </ContactsBtn>
      <ContactsBtn
        type="button"
        onClick={() => {
          contactChange(id);
        }}
      >
        Change
      </ContactsBtn>
    </Item>
  );
};

export default ContactItem;
ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleDeleteContact: PropTypes.func,
  contactChange: PropTypes.func,
  id: PropTypes.string,
};
