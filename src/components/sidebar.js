import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
//importing icons
import { Icon } from "react-icons-kit";
//home icon
import { home } from "react-icons-kit/icomoon/home";
//student icon
import { u1F466 } from 'react-icons-kit/noto_emoji_regular/u1F466';
//teacher icon
import { userTie } from 'react-icons-kit/icomoon/userTie'
export default function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <h4 className="brand">School</h4>
        <Navbar expand="" variant="dark">
          <Nav>
            <NavItem><NavLink exact to="/" className="nav-link"><Icon icon={home} size="25" /><br />Home</NavLink></NavItem>
            <NavItem><NavLink to="/Students" className="nav-link danger"><Icon icon={u1F466} size="30" /><br />Students</NavLink></NavItem>
            <NavItem><NavLink to="/Teachers" className="nav-link"><Icon icon={userTie} size="25" /><br />Teachers</NavLink></NavItem>
          </Nav>
        </Navbar>





      </div>
    </>
  );
}


