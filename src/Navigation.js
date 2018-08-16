import React, {Component} from 'react';
import NavItem from "react-bootstrap/es/NavItem";
import Nav from "react-bootstrap/es/Nav";

class Navigation extends Component {
    render() {
        return (
            <div>
                    <Nav>
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/">Link 2</NavItem>
                        <NavItem href="/">Link 3</NavItem>
                        <NavItem href="/">Link 4</NavItem>
                    </Nav>
            </div>
        );
    }
}

export default Navigation;