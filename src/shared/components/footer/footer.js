import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Kenny Mark</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href='https://github.com/kennymark/' target='_blank'>GitHub</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Footer;