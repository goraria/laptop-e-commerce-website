import React, {Component, useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faApple, faMeta, faGoogle
} from '@fortawesome/free-brands-svg-icons';
import {
    faAt, faLocationDot, faCity, faBullseye, faPhone, faUser
} from '@fortawesome/free-solid-svg-icons';

import SocialFormButton from "../elements/SocialFormButton.jsx";

import jp from '../assets/images/jp.jpeg'
import axios from "axios";

const sclItems = [
    // { id: 0, name: "Github", icon: faGithub, color: "secondary" },
    { id: 1, name: "Apple", icon: faApple, color: "dark" },
    { id: 2, name: "Google", icon: faGoogle, color: "success" },
    { id: 3, name: "Meta", icon: faMeta, color: "primary" },
    // { id: 4, name: "Twitter", icon: faTwitter },
]

function Register() {const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        retypepass: '',
        email: '',
        firstname: '',
        lastname: '',
        phone: ''
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

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

            if (formData.password === formData.retypepass) {
                try {
                    const response = await axios.post('http://localhost:5172/authentication/register', formData);

                    if (response.status === 201) {
                        alert('Registration successful');
                        navigate('/');  // Redirect to login after successful registration
                    }
                } catch (error) {
                    setError(error.response ? error.response.data.message : 'Registration failed');
                }
            } else {
                alert('Password is not match!');
            }
        }
        setValidated(true);
    };

    return (
        <div style={{marginTop: 112}}>
            <div>
                <Container style={{padding: '0, 12px'}}>
                    <Row style={{
                        padding: '15px 12px 15px 12px',
                        margin: '0',
                        borderRadius: 10,
                        backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0'
                    }}>
                        <div>
                            <h3>Register</h3>
                            <div style={{display: "flex", marginBottom: 16, justifyContent: 'center'}}>
                                <Image
                                    className="d-block"
                                    src={jp}
                                    alt="Second slide"
                                    style={{objectFit: 'cover', width: 224, height: 224, borderRadius: '5px'}}
                                />
                            </div>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md={7} controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">
                                                <FontAwesomeIcon icon={faAt}/>
                                            </InputGroup.Text>
                                            <Form.Control
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="email@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                defaultValue=""
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Looks good!
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md={5} controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">
                                                <FontAwesomeIcon icon={faUser}/>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md={6} controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                required
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Looks good!
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md={6} controlId="retypepass">
                                        <Form.Label>Verify Password</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                type="password"
                                                name="retypepass"
                                                placeholder="Re-type password"
                                                value={formData.retypepass}
                                                onChange={handleChange}
                                                aria-describedby="inputGroupPrepend"
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
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Looks good!
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
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Looks good!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md={4} controlId="phone">
                                        <Form.Label>Phone</Form.Label>
                                        {/*<Form.Control type="list-number" placeholder="Phone" required />*/}
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">
                                                <FontAwesomeIcon icon={faPhone}/>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                placeholder="Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid state.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                {/*<hr/>*/}
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check
                                                required
                                                type="checkbox"
                                                label="Agree to terms and conditions"
                                                feedback="You must agree before submitting."
                                                feedbackType="invalid"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant="danger" type="submit" className="mb-2" style={{width: '100%'}}>
                                            Register
                                        </Button>
                                    </Col>
                                </Row>
                                <hr/>
                                <div className="text-center" style={{marginBottom: 16}}>or sign up with</div>
                                <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                                    {sclItems.map(socialItem => (
                                        <SocialFormButton key={socialItem.id} socialItems={socialItem}/>
                                    ))}
                                </div>
                                <hr/>
                                <div className="text-center" style={{marginBottom: 16}}>
                                    you have an acoount
                                    <Link to="/login">
                                        <Button variant="link" style={{
                                            padding: 0,
                                            color: '#dc3545',
                                            textDecoration: "none",
                                            fontWeight: 'bold',
                                            paddingLeft: 4
                                        }}>Log in</Button>
                                    </Link>
                                </div>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

// class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//
//         }
//     }
//
//     render() {
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         // const [validated, setValidated] = useState(false);
//         //
//         // const handleSubmit = (event) => {
//         //     const form = event.currentTarget;
//         //     if (form.checkValidity() === false) {
//         //         event.preventDefault();
//         //         event.stopPropagation();
//         //     }
//         //
//         //     setValidated(true);
//         // };
//
//
//     }
// }

export default Register