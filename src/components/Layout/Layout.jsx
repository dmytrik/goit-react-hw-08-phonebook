import { Outlet } from 'react-router-dom';
import {
  Header,
  AuthList,
  AuthItem,
  NavList,
  NavListItem,
  Navigation,
  StyledLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavList>
            <NavListItem>
              <StyledLink to="/">Home</StyledLink>
            </NavListItem>
            <NavListItem>
              <StyledLink to="/contacts">Contacts</StyledLink>
            </NavListItem>
          </NavList>
        </Navigation>
        <AuthList>
          <AuthItem>
            <StyledLink to="/register">Sign up</StyledLink>
          </AuthItem>
          <AuthItem>
            <StyledLink to="/login">Log in</StyledLink>
          </AuthItem>
        </AuthList>
      </Header>
      <Outlet />
    </>
  );
};
export default Layout;
