import React, {Component, useEffect, useState} from 'react';
// import ReactDOM from 'react-dom/client';
import { Link, useNavigate } from "react-router-dom";
import {
    Container, Button, Nav, Navbar, NavDropdown, Form, DropdownButton, ButtonGroup
} from "react-bootstrap";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faShoppingCart, faUser, faSearch, faBarsProgress
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import DropdownConfig from "../components/button/DropdownConfig.jsx";
import SaveChange from "../components/modal/notify/SaveChange.jsx";
// import { search } from '../../../server/src/routes/ProductRouter.js';

const dropdownContains = [
    {
        id: 1, title: <FontAwesomeIcon icon={faShoppingCart} />, align: 'end', className: "ms-2 me-2", item: [
            { key: 1, name: "Profile", href: "#" },
            { key: 2, name: "Bill", href: "#" },
            { key: 2, name: "Full Cart", href: "#" }
        ]
    },
    {
        id: 2, title: <FontAwesomeIcon icon={faUser} />, align: 'end', className: "", item: [
            { key: 1, name: "Profile", href: "#" },
            { key: 2, name: "Bill", href: "#" },
            { key: 2, name: "Logout", href: "#" }
        ]
    }
]

const Header = () => {
    const [showModalHeader, setShowModalHeader] = useState(false);
    const [submit, setSubmit] = useState({ search: '' });

    const navigate = useNavigate();

    const [auth, setAuth] = useState({
        isAuthenticated: false,
        role: null
    });
    const [loading, setLoading] = useState(true);  // Thêm trạng thái loading
    const token = localStorage.getItem('token');

    const authenticationCheck = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get('http://localhost:5172/authentication/check', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAuth({
                isAuthenticated: true,
                role: response.data.role
            });
        } catch (error) {
            setAuth({
                isAuthenticated: false,
                role: null
            });
            localStorage.removeItem('token');
            navigate('/404');
        } finally {
            setLoading(false);  // Dừng loading sau khi fetch
        }
    };

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5172/authentication/logout', {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            localStorage.removeItem('token');  // Xóa JWT
            setShowModalHeader(false)
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const handleSearch = (event) => {
        try {
            event.preventDefault();
            navigate(`/search?search=${submit.search}`);
            setTimeout(() => {
                window.location.reload();
            }, 50);
            console.log('tìm kiếm thành công')
        } catch (error) {
            console.log('tìm kiếm ko thành công',error)
        }
    };

    const handleChange = (event) => {
        setSubmit({ ...submit, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        authenticationCheck()
    }, []);

    return (
        <>
            <Navbar fixed="top" expand="lg" className="bg-dark bg-body-tertiary" style={{ height: 56 }}> {/** data-bs-theme="dark" */}
                <Container>
                    <Navbar.Brand className="app-brand-text demo menu-text fw-bold" style={{ textTransform: 'capitalize' }} href="/">Bill Cipher</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={'/search'}>Product</Nav.Link>
                            <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                            <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto d-flex">
                            <Form className="d-flex" onSubmit={handleSearch} >
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    name="search"
                                    value={submit.search}
                                    onChange={handleChange}
                                />
                                <Button as={Link} to={'/search'} variant="outline-primary"><FontAwesomeIcon icon={faSearch} /></Button>
                            </Form>
                            {token ? auth.role === 0 ?
                                <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg: 'end' }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faShoppingCart} />}
                                        className="ms-2 me-2">
                                        <NavDropdown.Item as={Link} to={"/#"}>Schweitzenburg</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"#"}>Braunschweig</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to={"/user/cart"}>Full Cart</NavDropdown.Item>
                                    </DropdownButton>
                                </> :
                                <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg: 'end' }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faBarsProgress} />}
                                        className="ms-2 me-2">
                                        <NavDropdown.Item as={Link} to={"/admin"}>Dashborad</NavDropdown.Item>
                                    </DropdownButton>
                                </> :
                                <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg: 'end' }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faShoppingCart} />}
                                        className="ms-2 me-2">
                                        <NavDropdown.Item as={Link} to={"/"}>Nothing in here now!</NavDropdown.Item>
                                    </DropdownButton>
                                </>
                            }
                            {token ? auth.role === 0 ?
                                <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg: "end" }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faUser} />}
                                        className="">
                                        <NavDropdown.Item as={Link} to={"/user/profile"}>Profile</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/user/address"}>Address</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/user/bill"}>Bill</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => setShowModalHeader(true)}>Log out</NavDropdown.Item>
                                    </DropdownButton>
                                </> : <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg: "end" }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faUser} />}
                                        className="">
                                        <NavDropdown.Item as={Link} to={"/admin/profile"}>Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => setShowModalHeader(true)}>Log out</NavDropdown.Item>
                                    </DropdownButton>
                                </> : <>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg: "end" }}
                                        variant={'primary'}
                                        title={<FontAwesomeIcon icon={faUser} />}
                                        className="">
                                        <NavDropdown.Item as={Link} to={"/login"}>Log in</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/register"}>Sign up</NavDropdown.Item>
                                    </DropdownButton>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SaveChange
                show={showModalHeader}
                onHide={() => setShowModalHeader(false)}
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
{/*<Container className="d-flex justify-content-between flex-nowrap">*/ }
{/*    <Navbar.Brand href="/">Bill Cipher</Navbar.Brand>*/ }

{/*    /!*<Form className="d-flex d-lg-none mx-auto">*!/*/ }
{/*    /!*    <Form.Control*!/*/ }
{/*    /!*        type="search"*!/*/ }
{/*    /!*        placeholder="Search"*!/*/ }
{/*    /!*        className="me-2"*!/*/ }
{/*    /!*        aria-label="Search"*!/*/ }
{/*    /!*    />*!/*/ }
{/*    /!*    <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch} /></Button>*!/*/ }
{/*    /!*</Form>*!/*/ }
{/*    <div className="d-flex d-lg-none me-2">*/ }
{/*        <Form className="d-flex">*/ }
{/*            <Form.Control*/ }
{/*                type="search"*/ }
{/*                placeholder="Search"*/ }
{/*                className="me-2"*/ }
{/*                aria-label="Search"*/ }
{/*                style={{minWidth: '150px'}}*/ }
{/*            />*/ }
{/*            <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch}/></Button>*/ }
{/*        </Form>*/ }
{/*        <DropdownButton*/ }
{/*            as={ButtonGroup}*/ }
{/*            align={{lg: 'end'}}*/ }
{/*            variant={'primary'}*/ }
{/*            title={<FontAwesomeIcon icon={faShoppingCart}/>}*/ }
{/*            className="me-2 ms-2"*/ }
{/*        >*/ }
{/*            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>*/ }
{/*            <NavDropdown.Item href="#action/3.2">Bill</NavDropdown.Item>*/ }
{/*            <NavDropdown.Item href="/cart">Full Cart</NavDropdown.Item>*/ }
{/*        </DropdownButton>*/ }

{/*        <DropdownButton*/ }
{/*            as={ButtonGroup}*/ }
{/*            align={{lg: 'end'}}*/ }
{/*            variant={'primary'}*/ }
{/*            title={<FontAwesomeIcon icon={faUser}/>}*/ }
{/*        >*/ }
{/*            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>*/ }
{/*            <NavDropdown.Item href="/bill">Bill</NavDropdown.Item>*/ }
{/*            <NavDropdown.Divider/>*/ }
{/*            <NavDropdown.Item href="#">Log out</NavDropdown.Item>*/ }
{/*        </DropdownButton>*/ }
{/*    </div>*/ }

{/*    <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/ }

{/*    <Navbar.Collapse id="basic-navbar-nav">*/ }
{/*        <Nav className="me-auto">*/ }
{/*            <Nav.Link href="/search">Product</Nav.Link>*/ }
{/*            <Nav.Link href="/contact">Contact</Nav.Link>*/ }
{/*            <Nav.Link href="/about">About</Nav.Link>*/ }
{/*            /!*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*!/*/ }
{/*            /!*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*!/*/ }
{/*            /!*    <NavDropdown.Item href="#action/3.2">*!/*/ }
{/*            /!*        Another action*!/*/ }
{/*            /!*    </NavDropdown.Item>*!/*/ }
{/*            /!*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*!/*/ }
{/*            /!*    <NavDropdown.Divider />*!/*/ }
{/*            /!*    <NavDropdown.Item href="#action/3.4">*!/*/ }
{/*            /!*        Separated link*!/*/ }
{/*            /!*    </NavDropdown.Item>*!/*/ }
{/*            /!*</NavDropdown>*!/*/ }
{/*        </Nav>*/ }
{/*    </Navbar.Collapse>*/ }
{/*    <div className="d-none d-lg-flex align-items-center ms-auto flex-nowrap">*/ }
{/*        <Form className="d-flex me-2">*/ }
{/*            <Form.Control*/ }
{/*                type="search"*/ }
{/*                placeholder="Search"*/ }
{/*                className="me-2"*/ }
{/*                aria-label="Search"*/ }
{/*                style={{minWidth: '150px'}}*/ }
{/*            />*/ }
{/*            <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch}/></Button>*/ }
{/*        </Form>*/ }
{/*        <DropdownButton*/ }
{/*            as={ButtonGroup}*/ }
{/*            align={{lg: 'end'}}*/ }
{/*            variant={'primary'}*/ }
{/*            title={<FontAwesomeIcon icon={faShoppingCart}/>}*/ }
{/*            className="me-2"*/ }
{/*        >*/ }
{/*            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>*/ }
{/*            <NavDropdown.Item href="#action/3.2">Bill</NavDropdown.Item>*/ }
{/*            <NavDropdown.Item href="/cart">Full Cart</NavDropdown.Item>*/ }
{/*        </DropdownButton>*/ }

{/*        <DropdownButton*/ }
{/*            as={ButtonGroup}*/ }
{/*            align={{lg: 'end'}}*/ }
{/*            variant={'primary'}*/ }
{/*            title={<FontAwesomeIcon icon={faUser}/>}*/ }
{/*        >*/ }
{/*            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>*/ }
{/*            <NavDropdown.Item href="/bill">Bill</NavDropdown.Item>*/ }
{/*            <NavDropdown.Divider/>*/ }
{/*            <NavDropdown.Item href="#">Log out</NavDropdown.Item>*/ }
{/*        </DropdownButton>*/ }
{/*    </div>*/ }
{/*</Container>*/ }
//          )
//     }
// }

export default Header;
