import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Linh"
            />
          </NavbarBrand>
          <Collapse isOpen={navOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/staffs">
                  <span className="fa fa-users fa-lg"></span> Nhân Viên
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/department">
                  <span className="fa fa-id-card-o fa-lg"></span> Phòng Ban
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/salary">
                  <span className="fa fa-money fa-lg"></span> Bảng Lương
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
