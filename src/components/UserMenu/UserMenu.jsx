import { UserMenuBox, LogOut, UserGreetings } from './UserMenu.styled';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const name = useSelector(state => state.user.user.name);

  return (
    <UserMenuBox>
      <UserGreetings>Welcome {name}</UserGreetings>
      <LogOut type="button">Log out</LogOut>
    </UserMenuBox>
  );
};

export default UserMenu;
