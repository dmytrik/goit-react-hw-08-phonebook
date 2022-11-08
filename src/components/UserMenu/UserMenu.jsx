import { UserMenuBox, LogOut, UserGreetings } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/store/auth-operations';

const UserMenu = () => {
  const name = useSelector(state => state.user.user.name);
  const dispatch = useDispatch();

  return (
    <UserMenuBox>
      <UserGreetings>Welcome {name}</UserGreetings>
      <LogOut
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </LogOut>
    </UserMenuBox>
  );
};

export default UserMenu;
