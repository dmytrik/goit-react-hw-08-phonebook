import { AuthList, AuthItem, StyledLink } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <AuthList>
      <AuthItem>
        <StyledLink to="/register">Sign up</StyledLink>
      </AuthItem>
      <AuthItem>
        <StyledLink to="/login">Log in</StyledLink>
      </AuthItem>
    </AuthList>
  );
};
export default AuthMenu;
