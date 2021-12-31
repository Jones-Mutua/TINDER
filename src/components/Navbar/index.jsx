import { Link } from "react-router-dom";
import { Container, NavList, ClosedMenuIcon, OpenMenuIcon, DesktopMenu, MobileMenu } from "./Navbar";
import { useState } from "react";

const NavBar = () => {
  let name = "Tinder";
  const [open, setOpen] = useState(false)
  const handleMenuOpen = () => setOpen(!open);

  return (
    <Container>
      <h1>{name}</h1>
      <DesktopMenu>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contacts</Link>
          </li>
          <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        </NavList>
      </DesktopMenu>
      <div>
        {
          open ? <OpenMenuIcon onClick={handleMenuOpen}/> : <ClosedMenuIcon onClick={handleMenuOpen}/>
        }
        </div>
      <MobileMenu open={open}>
        <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/products">Products</Link>
        </li>
        </NavList>
      </MobileMenu>
    </Container>
  )
}

export default NavBar;