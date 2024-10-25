import React, {Component, useEffect, useState} from "react";
import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function AccountInfo() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        firstname: '',
        lastname: '',
        phone: ''
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    // Fetch data from API when component is mounted
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5172/account/1'); // replace '1' with the user ID
                const data = response.data;
                setFormData({
                    username: data.username,
                    email: data.email,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    phone: data.phone_number
                });
            } catch (error) {
                setError('Error fetching user data');
            }
        };

        fetchData();
    }, []);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            try {
                // Update user information
                const response = await axios.put('http://localhost:5172/account/1', formData); // replace '1' with the user ID
                if (response.status === 200) {
                    alert('User information updated successfully');
                    navigate('/');
                }
            } catch (error) {
                alert('Failed to update user information');
                setError(error.response ? error.response.data.message : 'Update failed');
            }
        }
        setValidated(true);
    };

    return (
        <Container style={{padding: '0 8px'}}>
            <h2>Account Information</h2>
            {/*<Form noValidate validated={validated} onSubmit={handleSubmit}>*/}
            {/*    <Row className="mb-3">*/}
            {/*        <Form.Group as={Col} md={7} controlId="firstname">*/}
            {/*            <Form.Label>Email address</Form.Label>*/}
            {/*            <InputGroup hasValidation>*/}
            {/*                <InputGroup.Text id="inputGroupPrepend">*/}
            {/*                    <FontAwesomeIcon icon={faAt}/>*/}
            {/*                </InputGroup.Text>*/}
            {/*                <Form.Control*/}
            {/*                    required*/}
            {/*                    type="email"*/}
            {/*                    placeholder="mail@mail.com"*/}
            {/*                    defaultValue=""*/}
            {/*                />*/}
            {/*                <Form.Control.Feedback type="invalid">*/}
            {/*                    Looks good!*/}
            {/*                </Form.Control.Feedback>*/}
            {/*            </InputGroup>*/}
            {/*        </Form.Group>*/}
            {/*        <Form.Group as={Col} md={5} controlId="validationCustomUsername">*/}
            {/*            <Form.Label>Username</Form.Label>*/}
            {/*            <InputGroup hasValidation>*/}
            {/*                <InputGroup.Text id="inputGroupPrepend">*/}
            {/*                    <FontAwesomeIcon icon={faUser}/>*/}
            {/*                </InputGroup.Text>*/}
            {/*                <Form.Control*/}
            {/*                    type="text"*/}
            {/*                    placeholder="username"*/}
            {/*                    aria-describedby="inputGroupPrepend"*/}
            {/*                    required*/}
            {/*                />*/}
            {/*                <Form.Control.Feedback type="invalid">*/}
            {/*                    Please choose a username.*/}
            {/*                </Form.Control.Feedback>*/}
            {/*            </InputGroup>*/}
            {/*        </Form.Group>*/}
            {/*    </Row>*/}
            {/*    <Row className="mb-3">*/}
            {/*        <Form.Group as={Col} md={4} controlId="firstname">*/}
            {/*            <Form.Label>First name</Form.Label>*/}
            {/*            <Form.Control*/}
            {/*                required*/}
            {/*                type="text"*/}
            {/*                placeholder="First name"*/}
            {/*                defaultValue=""*/}
            {/*            />*/}
            {/*            <Form.Control.Feedback type="invalid">*/}
            {/*                Looks good!*/}
            {/*            </Form.Control.Feedback>*/}
            {/*        </Form.Group>*/}
            {/*        <Form.Group as={Col} md={4} controlId="lastname">*/}
            {/*            <Form.Label>Last name</Form.Label>*/}
            {/*            <Form.Control*/}
            {/*                required*/}
            {/*                type="text"*/}
            {/*                placeholder="Last name"*/}
            {/*                defaultValue=""*/}
            {/*            />*/}
            {/*            <Form.Control.Feedback type="invalid">*/}
            {/*                Looks good!*/}
            {/*            </Form.Control.Feedback>*/}
            {/*        </Form.Group>*/}
            {/*        <Form.Group as={Col} md={4} controlId="validationCustom04">*/}
            {/*            <Form.Label>Phone</Form.Label>*/}
            {/*            /!*<Form.Control type="list-number" placeholder="Phone" required />*!/*/}
            {/*            <InputGroup hasValidation>*/}
            {/*                <InputGroup.Text id="inputGroupPrepend">*/}
            {/*                    <FontAwesomeIcon icon={faPhone}/>*/}
            {/*                </InputGroup.Text>*/}
            {/*                <Form.Control*/}
            {/*                    type="text"*/}
            {/*                    placeholder="Phone"*/}
            {/*                    aria-describedby="inputGroupPrepend"*/}
            {/*                    required*/}
            {/*                />*/}
            {/*                <Form.Control.Feedback type="invalid">*/}
            {/*                    Please provide a valid state.*/}
            {/*                </Form.Control.Feedback>*/}
            {/*            </InputGroup>*/}
            {/*        </Form.Group>*/}
            {/*    </Row>*/}
            {/*    <hr/>*/}
            {/*    <Row>*/}
            {/*        <Col sm={12} md={5} lg={4}>*/}
            {/*            <Button variant="primary" type="reset" className="mb-2" style={{width: '100%'}}>*/}
            {/*                Change Password*/}
            {/*            </Button>*/}
            {/*        </Col>*/}
            {/*        <Col sm={0} md={2} lg={4}></Col>*/}
            {/*        <Col sm={12} md={5} lg={4}>*/}
            {/*            <Button variant="primary" type="submit" className="mb-2" style={{width: '100%'}}>*/}
            {/*                Save*/}
            {/*            </Button>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Form>*/}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md={7} controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">
                                <FontAwesomeIcon icon={faAt} />
                            </InputGroup.Text>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                placeholder="mail@mail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md={5} controlId="username">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">
                                <FontAwesomeIcon icon={faUser} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md={4} controlId="firstname">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="firstname"
                            placeholder="First name"
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="lastname">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="lastname"
                            placeholder="Last name"
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a last name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">
                                <FontAwesomeIcon icon={faPhone} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <hr />
                <Row>
                    <Col sm={12} md={5} lg={4}>
                        <Button variant="primary" type="reset" className="mb-2" style={{ width: '100%' }}>
                            Change Password
                        </Button>
                    </Col>
                    <Col sm={0} md={2} lg={4}></Col>
                    <Col sm={12} md={5} lg={4}>
                        <Button variant="primary" type="submit" className="mb-2" style={{ width: '100%' }}>
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
            {error && <p className="text-danger">{error}</p>}
        </Container>
    )
}

// class AccountInfo extends Component {
// // function AccountInfo() {
//     constructor(parameters) {
//         super(parameters);
//         this.state = {
//             validated: false,
//         };
//
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleSubmit(event) {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }
//
//         this.setState({ validated: true });
//     }
//
//     render() {
//
//     }
// }

export default AccountInfo;