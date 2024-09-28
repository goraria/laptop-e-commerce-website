import React, {Component, useState} from "react";
import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faApple, faMeta, faGoogle
} from '@fortawesome/free-brands-svg-icons';
import {
    faAt, faLocationDot, faCity, faBullseye, faPhone
} from '@fortawesome/free-solid-svg-icons';

import SocialFormButton from "../elements/SocialFormButton.jsx";

import jp from '../resources/images/jp.jpeg'

const sclItems = [
    // { id: 0, name: "Github", icon: faGithub, color: "secondary" },
    { id: 1, name: "Apple", icon: faApple, color: "dark" },
    { id: 2, name: "Google", icon: faGoogle, color: "success" },
    { id: 3, name: "Meta", icon: faMeta, color: "primary" },
    // { id: 4, name: "Twitter", icon: faTwitter },
]

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const [validated, setValidated] = useState(false);
        //
        // const handleSubmit = (event) => {
        //     const form = event.currentTarget;
        //     if (form.checkValidity() === false) {
        //         event.preventDefault();
        //         event.stopPropagation();
        //     }
        //
        //     setValidated(true);
        // };

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
                                <Form noValidate>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                defaultValue=""
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Last name"
                                                defaultValue=""
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                            <Form.Label>Username</Form.Label>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faAt} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="username"
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
                                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                                            <Form.Label>Address</Form.Label>
                                            {/*<Form.Control type="text" placeholder="Address" required />*/}
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Address"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid address.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                                            <Form.Label>City</Form.Label>
                                            {/*<Form.Control type="text" placeholder="City" required />*/}
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faCity} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="City"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid city.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                                            <Form.Label>State</Form.Label>
                                            {/*<Form.Control type="text" placeholder="State" required />*/}
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faBullseye} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="State"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid state.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                                            <Form.Label>Phone</Form.Label>
                                            {/*<Form.Control type="list-number" placeholder="Phone" required />*/}
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Phone"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid state.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            label="Agree to terms and conditions"
                                            feedback="You must agree before submitting."
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <Button variant="danger" type="submit" className="mb-3" style={{width: '100%'}}>
                                        Register
                                    </Button>
                                </Form>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Register