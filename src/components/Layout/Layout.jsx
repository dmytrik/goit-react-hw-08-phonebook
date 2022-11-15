import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Text } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

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
              <StyledLink to="/">
                <Text as="em">Home</Text>
              </StyledLink>
            </NavListItem>
            {loggIn && (
              <NavListItem>
                <StyledLink to="/contacts">
                  <Text as="em">Contacts</Text>
                </StyledLink>
              </NavListItem>
            )}
          </NavList>
        </Navigation>
        {loggIn ? <UserMenu /> : <AuthMenu />}
      </Header>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
