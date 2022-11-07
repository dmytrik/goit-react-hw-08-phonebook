import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  border-bottom: 2px solid silver;
  padding: 0 15px;
`;
export const Navigation = styled.nav``;
export const NavList = styled.ul`
  display: flex;
`;
export const NavListItem = styled.li``;
export const AuthList = styled.ul`
  margin-left: auto;
  display: flex;
`;
export const AuthItem = styled.li``;
export const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px 5px;
  text-decoration: none;
  cursor: pointer;
  color: black;
`;
