import { Outlet } from 'react-router-dom';
import {
  Header,
  NavList,
  NavListItem,
  Navigation,
  StyledLink,
} from './Layout.styled';
import AuthMenu from 'components/AuthMenu/AuthMenu';

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
        <AuthMenu />
      </Header>
      <Outlet />
    </>
  );
};
export default Layout;
