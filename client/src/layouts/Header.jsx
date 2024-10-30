import React, {Component, useState} from 'react';
// import ReactDOM from 'react-dom/client';
import {Link, useNavigate} from "react-router-dom";
import {
    Container, Button, Nav, Navbar, NavDropdown, Form, DropdownButton, ButtonGroup
} from "react-bootstrap";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faShoppingCart, faUser, faSearch
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import DropdownConfig from "../components/button/DropdownConfig.jsx";
import SaveChange from "../components/modal/notify/SaveChange.jsx";

const dropdownContains = [
    {
        id: 1, title: <FontAwesomeIcon icon={faShoppingCart}/>, align: 'end', className: "ms-2 me-2", item: [
            {key: 1, name: "Profile", href: "#"},
            {key: 2, name: "Bill", href: "#"},
            {key: 2, name: "Full Cart", href: "#"}
        ]
    },
    {
        id: 2, title: <FontAwesomeIcon icon={faUser}/>, align: 'end', className: "", item: [
            {key: 1, name: "Profile", href: "#"},
            {key: 2, name: "Bill", href: "#"},
            {key: 2, name: "Logout", href: "#"}
        ]
    }
]

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post('/api/logout', {}, {
                headers: { Authorization: token },
            });
            localStorage.removeItem('token');  // Xóa JWT
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5172/authentication/logout', {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            localStorage.removeItem('token');  // Xóa JWT
            setShowModal(false)
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <>
            <Navbar fixed="top" expand="lg" className="bg-dark bg-body-tertiary" style={{height: 56}}> {/** data-bs-theme="dark" */}
                <Container>
                    <Navbar.Brand className="app-brand-text demo menu-text fw-bold" style={{textTransform: 'capitalize'}} href="/">Bill Cipher</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link style={{color: "white"}} to={'/search'}>Product</Link></Nav.Link>
                            <Nav.Link><Link style={{color: "white"}} to={'/contact'}>Contact</Link></Nav.Link>
                            <Nav.Link><Link style={{color: "white"}} to={'/about'}>About</Link></Nav.Link>
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
                        <Nav className="ms-auto d-flex">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch} /></Button>
                            </Form>
                            {token ?
                                <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg: 'end' }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faShoppingCart}/>}
                                        className="ms-2 me-2">
                                        <NavDropdown.Item href="/product?id=1">Schweitzenburg</NavDropdown.Item>
                                        <NavDropdown.Item href="/product?id=2">Braunschweig</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <Link to={"/cart"}><NavDropdown.Item href="/cart">Full Cart</NavDropdown.Item></Link>
                                    </DropdownButton>
                                </> :
                                <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg: 'end' }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faShoppingCart}/>}
                                        className="ms-2 me-2">
                                        <Link to={"/"}><NavDropdown.Item href="/">Nothing in here now!</NavDropdown.Item></Link>
                                    </DropdownButton>
                                </>
                            }
                            {token ?
                                <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg:"end" }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faUser}/>}
                                        className="">
                                        <Link to={"/profile"}><NavDropdown.Item href="/profile">Profile</NavDropdown.Item></Link>
                                        <Link to={"/address"}><NavDropdown.Item href="/address">Address</NavDropdown.Item></Link>
                                        <Link to={"/bill"}><NavDropdown.Item href="/bill">Bill</NavDropdown.Item></Link>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => setShowModal(true)}>Log out</NavDropdown.Item>
                                    </DropdownButton>
                                </> : <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg:"end" }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faUser}/>}
                                        className="">
                                        <Link to={"/login"}><NavDropdown.Item href="/login">Log in</NavDropdown.Item></Link>
                                        <Link to={"/register"}><NavDropdown.Item href="/register">Sign up</NavDropdown.Item></Link>
                                    </DropdownButton>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SaveChange
                show={showModal}
                onHide={() => setShowModal(false)}
                onSave={handleLogout}
                title="Log out"
                text="Do you want to log out?"
                button="Log out"
            />
        </>
    );
}

// class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//
//         }
//     }
//
//     render() {
//          return (
//
{/*<Container className="d-flex justify-content-between flex-nowrap">*/}
{/*    <Navbar.Brand href="/">Bill Cipher</Navbar.Brand>*/}

{/*    /!*<Form className="d-flex d-lg-none mx-auto">*!/*/}
{/*    /!*    <Form.Control*!/*/}
{/*    /!*        type="search"*!/*/}
{/*    /!*        placeholder="Search"*!/*/}
{/*    /!*        className="me-2"*!/*/}
{/*    /!*        aria-label="Search"*!/*/}
{/*    /!*    />*!/*/}
{/*    /!*    <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch} /></Button>*!/*/}
{/*    /!*</Form>*!/*/}
{/*    <div className="d-flex d-lg-none me-2">*/}
{/*        <Form className="d-flex">*/}
{/*            <Form.Control*/}
{/*                type="search"*/}
{/*                placeholder="Search"*/}
{/*                className="me-2"*/}
{/*                aria-label="Search"*/}
{/*                style={{minWidth: '150px'}}*/}
{/*            />*/}
{/*            <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch}/></Button>*/}
{/*        </Form>*/}
{/*        <DropdownButton*/}
{/*            as={ButtonGroup}*/}
{/*            align={{lg: 'end'}}*/}
{/*            variant={'primary'}*/}
{/*            title={<FontAwesomeIcon icon={faShoppingCart}/>}*/}
{/*            className="me-2 ms-2"*/}
{/*        >*/}
{/*            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>*/}
{/*            <NavDropdown.Item href="#action/3.2">Bill</NavDropdown.Item>*/}
{/*            <NavDropdown.Item href="/cart">Full Cart</NavDropdown.Item>*/}
{/*        </DropdownButton>*/}

{/*        <DropdownButton*/}
{/*            as={ButtonGroup}*/}
{/*            align={{lg: 'end'}}*/}
{/*            variant={'primary'}*/}
{/*            title={<FontAwesomeIcon icon={faUser}/>}*/}
{/*        >*/}
{/*            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>*/}
{/*            <NavDropdown.Item href="/bill">Bill</NavDropdown.Item>*/}
{/*            <NavDropdown.Divider/>*/}
{/*            <NavDropdown.Item href="#">Log out</NavDropdown.Item>*/}
{/*        </DropdownButton>*/}
{/*    </div>*/}

{/*    <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}

{/*    <Navbar.Collapse id="basic-navbar-nav">*/}
{/*        <Nav className="me-auto">*/}
{/*            <Nav.Link href="/search">Product</Nav.Link>*/}
{/*            <Nav.Link href="/contact">Contact</Nav.Link>*/}
{/*            <Nav.Link href="/about">About</Nav.Link>*/}
{/*            /!*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*!/*/}
{/*            /!*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*!/*/}
{/*            /!*    <NavDropdown.Item href="#action/3.2">*!/*/}
{/*            /!*        Another action*!/*/}
{/*            /!*    </NavDropdown.Item>*!/*/}
{/*            /!*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*!/*/}
{/*            /!*    <NavDropdown.Divider />*!/*/}
{/*            /!*    <NavDropdown.Item href="#action/3.4">*!/*/}
{/*            /!*        Separated link*!/*/}
{/*            /!*    </NavDropdown.Item>*!/*/}
{/*            /!*</NavDropdown>*!/*/}
{/*        </Nav>*/}
{/*    </Navbar.Collapse>*/}
{/*    <div className="d-none d-lg-flex align-items-center ms-auto flex-nowrap">*/}
{/*        <Form className="d-flex me-2">*/}
{/*            <Form.Control*/}
{/*                type="search"*/}
{/*                placeholder="Search"*/}
{/*                className="me-2"*/}
{/*                aria-label="Search"*/}
{/*                style={{minWidth: '150px'}}*/}
{/*            />*/}
{/*            <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch}/></Button>*/}
{/*        </Form>*/}
{/*        <DropdownButton*/}
{/*            as={ButtonGroup}*/}
{/*            align={{lg: 'end'}}*/}
{/*            variant={'primary'}*/}
{/*            title={<FontAwesomeIcon icon={faShoppingCart}/>}*/}
{/*            className="me-2"*/}
{/*        >*/}
{/*            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>*/}
{/*            <NavDropdown.Item href="#action/3.2">Bill</NavDropdown.Item>*/}
{/*            <NavDropdown.Item href="/cart">Full Cart</NavDropdown.Item>*/}
{/*        </DropdownButton>*/}

{/*        <DropdownButton*/}
{/*            as={ButtonGroup}*/}
{/*            align={{lg: 'end'}}*/}
{/*            variant={'primary'}*/}
{/*            title={<FontAwesomeIcon icon={faUser}/>}*/}
{/*        >*/}
{/*            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>*/}
{/*            <NavDropdown.Item href="/bill">Bill</NavDropdown.Item>*/}
{/*            <NavDropdown.Divider/>*/}
{/*            <NavDropdown.Item href="#">Log out</NavDropdown.Item>*/}
{/*        </DropdownButton>*/}
{/*    </div>*/}
{/*</Container>*/}
//          )
//     }
// }

export default Header;
