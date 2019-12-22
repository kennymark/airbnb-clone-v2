import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Airbnb</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
