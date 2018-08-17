import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './App.css';

class TopNavigation extends Component {
    render() {
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Navigation Bar</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavDropdown eventKey={2} title="Browse Places" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} href="/citylist">List of Cities</MenuItem>
                            <MenuItem eventKey={2.2} href="/countrylist">List of Countries</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="/chat">Chat</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopNavigation;