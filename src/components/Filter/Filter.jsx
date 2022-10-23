import { Input } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/store/contactsSlice';
import { P } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <>
      <P>Find contacts by name</P>
      <Input
        type="text"
        onChange={e => {
          dispatch(setFilter({ text: e.target.value }));
        }}
      ></Input>
    </>
  );
}
