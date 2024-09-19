import React, {Component} from 'react';
// import ReactDOM from 'react-dom/client';
import {
    Container, Button, Nav, Navbar, NavDropdown, Form, DropdownButton, ButtonGroup
} from "react-bootstrap";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faShoppingCart, faUser, faSearch
} from "@fortawesome/free-solid-svg-icons";

import DropdownConfig from "../elements/DropdownConfig";

const dropdownContains = [
    {id: 1, title: <FontAwesomeIcon icon={faShoppingCart}/>, align: 'end', item: [
            {key: 1, name: "Profile", href: "#"},
            {key: 2, name: "Bill", href: "#"},
            {key: 2, name: "Full Cart", href: "#"}
        ]},
    {id: 2, title: <FontAwesomeIcon icon={faUser}/>, align: 'end', item: [
            {key: 1, name: "Profile", href: "#"},
            {key: 2, name: "Bill", href: "#"},
            {key: 2, name: "Logout", href: "#"}
        ]}
]


class Header extends Component {
    render() {
        const search = {
            color: 'white',
            margin: '0 8px'
        }
        return (
            <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Bill Cipher</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/product">Product</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">*/}
                            {/*        Another action*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item href="#action/3.4">*/}
                            {/*        Separated link*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger"><FontAwesomeIcon icon={faSearch} /></Button>
                        </Form>
                        <DropdownButton
                            as={ButtonGroup}
                            align={{ lg: 'end' }}
                            variant={'danger'}
                            title={<FontAwesomeIcon icon={faShoppingCart}/>}
                            style={{ color: 'white', margin: '0 8px'}}
                            id="dropdown-menu-align-responsive-1">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bill</NavDropdown.Item>
                            {/*<NavDropdown.Divider />*/}
                            <NavDropdown.Item href="/cart">Full Cart</NavDropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            as={ButtonGroup}
                            align={{ lg: 'end' }}
                            variant={'danger'}
                            title={<FontAwesomeIcon icon={faUser}/>}
                            style={{ color: 'white' }}
                            id="dropdown-menu-align-responsive-1">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/bill">Bill</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Log out</NavDropdown.Item>
                        </DropdownButton>
                        {/*<DropdownConfig dropdownContains={dropdownContains[0]} style={{ color: 'white', margin: '0 8px'}}/>*/}
                        {/*<DropdownConfig dropdownContains={dropdownContains[1]}/>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
