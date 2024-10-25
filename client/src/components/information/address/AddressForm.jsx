import {Button, Col, Form, InputGroup, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faCheck,
    faCity,
    faFlag,
    faGlobe,
    faRoad,
    faUser,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import axios from "axios";

let AddressForm = ({ address, show, onHide }) => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        tower: '',
        street: '',
        district: '',
        city: '',
        state: '',
        country: ''
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (address) {
            setFormData({
                tower: address.tower || '',
                street: address.street || '',
                district: address.district || '',
                city: address.city || '',
                state: address.state || '',
                country: address.country || ''
            });
        } else {
            setFormData({
                tower: '',
                street: '',
                district: '',
                city: '',
                state: '',
                country: ''
            });
        }
    }, [address]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        try {
            // const url = address ?
            //     `http://localhost:5172/address/update/${address.idaddress}` :
            //     'http://localhost:5172/address/addition';

            // const method = address ? 'put' : 'post';

            const response = address ?
                await axios.put(`http://localhost:5172/address/update/${address.idaddress}`, formData) :
                await axios.post('http://localhost:5172/address/addition', formData);

            if (response.status === 200 || response.status === 201) {
                alert(address ? 'Address updated successfully' : 'Address added successfully');
                onHide();
            }
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Failed to save address');
        }
        setValidated(true);
    };

    return (
        <Modal
            {...address}
            show={show}
            onHide={onHide} //
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
                                    name="tower"
                                    value={formData.tower}
                                    onChange={handleChange}
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
                                    required
                                    type="text"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
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
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
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
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
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
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
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
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
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
            {/*<Modal.Footer>*/}
            {/*    <Button variant="secondary" onClick={onHide}>*/}
            {/*        <FontAwesomeIcon icon={faXmark} className="me-2" />*/}
            {/*        Close*/}
            {/*    </Button>*/}
            {/*    <Button type="submit" variant="info">*/}
            {/*        <FontAwesomeIcon icon={faCheck} className="me-2" />*/}
            {/*        {address ? 'Save Changes' : 'Add Address'}*/}
            {/*    </Button>*/}
            {/*</Modal.Footer>*/}
            <Modal.Footer>
                <Button onClick={onHide} variant="secondary" style={{ marginRight: "auto" }}>
                    <FontAwesomeIcon icon={faXmark} className="me-2" />
                    <span>Close</span>
                </Button>
                <Button type="submit" onClick={handleSubmit} variant="info">
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    <span>Save changes</span>
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddressForm
