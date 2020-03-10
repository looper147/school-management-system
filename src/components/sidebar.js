import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
//home icon
import { FaHome } from "react-icons/fa";
//student icon
import { FaBookReader } from 'react-icons/fa';
//teacher icon
import { FaUserTie } from 'react-icons/fa';
import { NavbarBrand } from "react-bootstrap";
export default function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <Navbar expand="" variant="dark">
          <Nav>
            <NavbarBrand>School</NavbarBrand>
            <NavItem><NavLink exact to="/" className="nav-link"><FaHome /><br />Home</NavLink></NavItem>
            <NavItem><NavLink to="/Students" className="nav-link danger"><FaBookReader /><br />Students</NavLink></NavItem>
            <NavItem><NavLink to="/Teachers" className="nav-link"><FaUserTie /><br />Teachers</NavLink></NavItem>
          </Nav>
        </Navbar>





      </div>
    </>
  );
}


