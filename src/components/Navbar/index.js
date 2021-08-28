import React from "react";
import { NavContainer, NavItem, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <NavMenu>
          <NavItem>upload</NavItem>
          <NavItem>download</NavItem>
        </NavMenu>
      </NavContainer>
    </>
  );
};

export default Navbar;
