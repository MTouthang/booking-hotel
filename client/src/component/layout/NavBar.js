import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  Collapse,
  NavLink,
  NavbarText,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar color="info" expand="md" light className="p-4">
        <NavbarBrand tag={Link} to="/" className="text-white mx-6">
          HOTEL BOOKING APP
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/signup" className="text-white">
                SIGNUP
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/signin" className="text-white">
                SINGIN
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/bookings" className="text-white">
                BOOKINGS
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>UserName</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
