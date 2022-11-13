import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Header,
  NavList,
  NavListItem,
  Navigation,
  StyledLink,
} from './Layout.styled';
import { useSelector } from 'react-redux';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = () => {
  const loggIn = useSelector(state => state.user.isLoggedIn);
  return (
    <>
      <Header>
        <Navigation>
          <NavList>
            <NavListItem>
              <StyledLink to="/">Home</StyledLink>
            </NavListItem>
            {loggIn && (
              <NavListItem>
                <StyledLink to="/contacts">Contacts</StyledLink>
              </NavListItem>
            )}
          </NavList>
        </Navigation>
        {loggIn ? <UserMenu /> : <AuthMenu />}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
