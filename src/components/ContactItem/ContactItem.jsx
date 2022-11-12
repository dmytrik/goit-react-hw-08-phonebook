import { Item, ContactsBtn } from './ContactItem.styled';

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
