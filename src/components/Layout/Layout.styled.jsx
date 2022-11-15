import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  border-bottom: 2px solid silver;
  padding: 10px 15px;
  background-color: rgb(70, 70, 70);
`;
export const Navigation = styled.nav``;
export const NavList = styled.ul`
  display: flex;
`;
export const NavListItem = styled.li`
  &:not(:first-child) {
    margin-left: 3px;
  }
`;
export const StyledLink = styled(NavLink)`
  display: block;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  border-radius: 8px;
  &:hover {
    background-color: white;
    color: rgb(60, 60, 60);
  }
  &.active {
    background-color: white;
    color: rgb(60, 60, 60);
  }
`;
