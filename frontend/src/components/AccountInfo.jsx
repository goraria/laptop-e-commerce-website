import { Component } from "react";
import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";

class AccountInfo extends Component {
    constructor(parameters) {
        super(parameters);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <h2>Account Information</h2>
                {/*<Form>*/}
                {/*    <Form.Group className="mb-3" controlId="formName">*/}
                {/*        <Form.Label>Tên của bạn</Form.Label>*/}
                {/*        <div className="d-flex align-items-center">*/}
                {/*            <FontAwesomeIcon icon={faUser} className="me-2" />*/}
                {/*            <Form.Control type="text" defaultValue="Truong Giang Pham" />*/}
                {/*        </div>*/}
                {/*    </Form.Group>*/}

                {/*    <Form.Group className="mb-3" controlId="formEmail">*/}
                {/*        <Form.Label>Email</Form.Label>*/}
                {/*        <div className="d-flex align-items-center">*/}
                {/*            <FontAwesomeIcon icon={faEnvelope} className="me-2" />*/}
                {/*            <Form.Control type="email" defaultValue="truonggiangpham.workspace@gmail.com" />*/}
                {/*        </div>*/}
                {/*    </Form.Group>*/}

                {/*    <Form.Group className="mb-3" controlId="formPhone">*/}
                {/*        <Form.Label>Số điện thoại</Form.Label>*/}
                {/*        <div className="d-flex align-items-center">*/}
                {/*            <FontAwesomeIcon icon={faPhone} className="me-2" />*/}
                {/*            <Form.Control type="text" placeholder="Nhập số điện thoại" />*/}
                {/*        </div>*/}
                {/*    </Form.Group>*/}
                {/*</Form>*/}
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
                        Change Password
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default AccountInfo;