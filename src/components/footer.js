import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Footer = (props) => {
return (
    <div>
      <Navbar color="primary" dark id="Footer" className="m-0">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <h5>Website made by A. R. Miller.  Restautant is fictitious, location used with permission of Awesome, Inc.</h5>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
      </Navbar>
    </div>
  );
}

export default Footer;