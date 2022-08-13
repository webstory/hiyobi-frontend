import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar
        light
        className="navbar-expand"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <NavbarBrand tag={RRNavLink} to="/">
          hiyobi.me
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/search">
                <span className="oi oi-magnifying-glass" />{" "}
                <span className="d-none d-md-inline">검색</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default MainNavbar;
