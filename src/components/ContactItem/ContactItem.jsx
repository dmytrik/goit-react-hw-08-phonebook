import { Item } from './ContactItem.styled';
import { Box, Text, Button } from '@chakra-ui/react';
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
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Text as="em" color="green.200" fontSize="lg">
          {name} :
        </Text>
        <Text fontSize="lg" color="white" ml="5px">
          {number}
        </Text>
        <Button
          colorScheme="red"
          ml="5px"
          type="button"
          onClick={() => {
            handleDeleteContact(id);
          }}
        >
          Delete
        </Button>
        <Button
          colorScheme="orange"
          ml="5px"
          type="button"
          onClick={() => {
            contactChange(id);
          }}
        >
          Change
        </Button>
      </Box>
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
