import React, {Component} from "react";
import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import jp from "../resources/images/jp.jpeg";

const user = {
    firstname: 'Japtor',
    lastname: 'de Gortheia',

}

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
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
                                <h3>Product</h3>
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
                                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
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
                                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text" placeholder="Address" required/>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid address.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="City" required/>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid city.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control type="text" placeholder="State" required/>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid state.
                                            </Form.Control.Feedback>
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

export default Product