import getGreetingMessage from '../utils/greetingHandler';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {Button, ButtonToolbar, Nav} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import SaveChange from "../components/modal/notify/SaveChange.jsx";
const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
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
            <Nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a aria-label='toggle for sidebar' className="nav-item nav-link px-0 me-xl-4" href="#">
                        <i className="bx bx-menu bx-sm"></i>
                    </a>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    {getGreetingMessage('Japtor')}
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item me-2">
                            <Button as={Link} to={'/'} style={{height: 38}}>
                                <FontAwesomeIcon icon={faHome}/>
                            </Button>
                        </li>
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a aria-label='dropdown profile avatar' className="nav-link dropdown-toggle hide-arrow"
                               href="#" data-bs-toggle="dropdown">
                                <div className="avatar">{/*avatar-online*/}
                                    <Button style={{height: '100%'}}><FontAwesomeIcon icon={faUser}/></Button>
                                    {/*<img src="../assets/img/avatars/1.png" className="w-px-40 h-auto rounded-circle" alt="avatar-image" aria-label='Avatar Image' />*/}
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a aria-label='go to profile' className="dropdown-item" href="#">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar avatar-online">
                                                    <img src="../assets/img/avatars/1.png"
                                                         className="w-px-40 h-auto rounded-circle" alt='avatar-image'
                                                         aria-label='Avatar Image'/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="fw-medium d-block">Schweitzenburg</span>
                                                <small className="text-muted">Administrator</small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link to={'/admin/profile'} aria-label='go to profile' className="dropdown-item">
                                        <i className="bx bx-user me-2"></i>
                                        <span className="align-middle">Profile</span>
                                    </Link>
                                </li>
                                {/*<li>*/}
                                {/*    <a aria-label='go to setting' className="dropdown-item" href="#">*/}
                                {/*        <i className="bx bx-cog me-2"></i>*/}
                                {/*        <span className="align-middle">Settings</span>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a aria-label='go to billing' className="dropdown-item" href="#">*/}
                                {/*        <span className="d-flex align-items-center align-middle">*/}
                                {/*            <i className="flex-shrink-0 bx bx-credit-card me-2"></i>*/}
                                {/*            <span className="flex-grow-1 align-middle ms-1">Billing</span>*/}
                                {/*            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>*/}
                                {/*        </span>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => setShowModal(true)}
                                        variant="light" aria-label='click to log out'
                                        className="dropdown-item" to={'#'}
                                    >
                                        <i className="bx bx-power-off me-2"></i>
                                        <span className="align-middle">Log Out</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Nav>
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
export default Navbar;