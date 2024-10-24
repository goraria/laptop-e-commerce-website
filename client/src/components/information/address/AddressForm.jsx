import {Button, Col, Form, InputGroup, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt,
    faBuilding,
    faCheck,
    faCity,
    faEdit, faFlag,
    faGlobe,
    faRoad,
    faUser,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

let AddressForm = (props) => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
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
            try {
                const response = await axios.post('http://localhost:5172/login/authentication', {
                    username: formData.username,
                    password: formData.password
                });

                const data = response.data;
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    alert('Login successful');
                    navigate('/');
                }
            } catch (error) {
                alert('Login fail');
                setError(error.response ? error.response.data.message : 'Login failed');
            }
        }
        setValidated(true);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>Address Details</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md={4} controlId="tower">
                            <Form.Label>Tower</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="tower">
                                    <FontAwesomeIcon icon={faBuilding}/>
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Gorth"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a building.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md={4} controlId="street">
                            <Form.Label>Street</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="street">
                                    <FontAwesomeIcon icon={faRoad}/>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Henovia"
                                    aria-describedby="street"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a road.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md={4} controlId="district">
                            <Form.Label>District</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="district">
                                    <FontAwesomeIcon icon={faUser}/>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="San Siro"
                                    aria-describedby="district"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a district.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md={4} controlId="city">
                            <Form.Label>City</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="city">
                                    <FontAwesomeIcon icon={faCity}/>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Milano"
                                    aria-describedby="city"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a city.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md={4} controlId="state">
                            <Form.Label>State</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="state">
                                    <FontAwesomeIcon icon={faFlag}/>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Madonnina"
                                    aria-describedby="state"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a state.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md={4} controlId="country">
                            <Form.Label>Country</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="country">
                                    <FontAwesomeIcon icon={faGlobe}/>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Italy"
                                    aria-describedby="country"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a country.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <hr/>
                    {/*<Row>*/}
                    {/*    <Col sm={0} md={0} lg={4}/>*/}
                    {/*    <Col sm={0} md={0} lg={4}/>*/}
                    {/*    <Col sm={12} md={5} lg={4}>*/}
                    {/*        <Button onClick={handleChange} variant="info" type="submit" className="mb-2"*/}
                    {/*                style={{width: '100%'}}>*/}
                    {/*            Save change*/}
                    {/*        </Button>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} style={{marginRight: "auto"}}>
                    <FontAwesomeIcon icon={faXmark} className="me-2"/>
                    <span>Close</span>
                </Button>
                <Button onClick={handleChange} variant="info" type="submit" className="mb-2">
                    <FontAwesomeIcon icon={faCheck} className="me-2"/>
                    <span>Save change</span>
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddressForm