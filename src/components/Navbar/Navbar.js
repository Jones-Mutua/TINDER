import styled, { css } from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { MdMenuOpen } from 'react-icons/md';

const iconStyles = css`
  color: #fff;
  font-size: 40px;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  background-color: navy;
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  width: 100%;
  & h1 {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  & a {
    color: #fff;
    text-decoration: none;
  }
`;
export const ClosedMenuIcon = styled(HiMenu)`
  ${iconStyles}
`;
export const OpenMenuIcon = styled(MdMenuOpen)`
  ${iconStyles}
`;

export const DesktopMenu = styled.div`
  display: none;
  & a {
    font-size: 1.2em;
  }
  @media (min-width: 600px) {
    display: block;
    width: 60%;
  }
`;
export const MobileMenu = styled.div`
  /* display: ${({ open }) => (open ? 'block' : 'none')}; */
  position: absolute;
  top: 10vh;
  right: 0;
  /* left: ${({ open }) => (open ? 0 : -1000)}; */
  left: ${({ open }) => (open ? 0 : '-100%')};
  background-color: navy;
  width: 100%;
  transition: all 3s;
  height: 90vh;
  & ul {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;