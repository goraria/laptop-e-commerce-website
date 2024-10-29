import React, {useEffect, useState} from "react";
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
import axios from "axios";
import SaveChange from "../notify/SaveChange.jsx";

const AddressForm = ({ address, show, onHide, reload }) => {
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
    const [showConfirmModal, setShowConfirmModal] = useState(false); // Trạng thái cho modal xác nhận

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
                // alert(address ? 'Address updated successfully' : 'Address added successfully');
                onHide();
            }
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Failed to save address');
        }
        setValidated(true);
    };

    const openConfirmModal = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        setShowConfirmModal(true); // Mở modal xác nhận
    };

    const handleConfirmSave = async () => {
        try {
            const response = address ?
                await axios.put(`http://localhost:5172/address/update/${address.idaddress}`, formData) :
                await axios.post('http://localhost:5172/address/addition', formData);

            if (response.status === 200 || response.status === 201) {
                // alert(address ? 'Address updated successfully' : 'Address added successfully');
                setShowConfirmModal(false); // Đóng modal xác nhận
                onHide();
            }
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Failed to save address');
        }
    };

    return (
        <>
            <Modal
                // {...address}
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
                    <h4>Note</h4>
                    <p>
                        Enter invalid values of all input groups to help us know your location. Then we can deliver your package.
                    </p>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}> {/*onSubmit={handleSubmit, openConfirmModal}*/}
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
                    </Form>
                    {error && <p className="text-danger">{error}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide} variant="secondary" style={{ marginRight: "auto" }}>
                        <FontAwesomeIcon icon={faXmark} className="me-2" />
                        <span>Close</span>
                    </Button>
                    <Button type="submit" variant="info" onClick={handleSubmit}> {/*onClick={handleSubmit, openConfirmModal}*/}
                        <FontAwesomeIcon icon={faCheck} className="me-2" />
                        <span>Save changes</span>
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*<SaveChange*/}
            {/*    show={showConfirmModal}*/}
            {/*    onHide={() => setShowConfirmModal(false)}*/}
            {/*    onSave={handleConfirmSave}*/}
            {/*/>*/}
        </>
    );
}

let AddressForm0 = ({ address, show, onHide }) => {
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
    const [showConfirmModal, setShowConfirmModal] = useState(false); // Trạng thái cho modal xác nhận

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

    const openConfirmModal = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        setShowConfirmModal(true); // Mở modal xác nhận
    };

    const handleConfirmSave = async () => {
        try {
            const response = address ?
                await axios.put(`http://localhost:5172/address/update/${address.idaddress}`, formData) :
                await axios.post('http://localhost:5172/address/addition', formData);

            if (response.status === 200 || response.status === 201) {
                // alert(address ? 'Address updated successfully' : 'Address added successfully');
                setShowConfirmModal(false); // Đóng modal xác nhận
                onHide(); // Đóng modal chính
            }
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Failed to save address');
        }
    };

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Address Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={openConfirmModal}>
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
                        <Button variant="info" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                    {error && <p className="text-danger">{error}</p>}
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
            </Modal>

            {/* Modal xác nhận */}
            <SaveChange
                show={showConfirmModal}
                onHide={() => setShowConfirmModal(false)}
                onSave={handleConfirmSave} // Hàm xác nhận lưu
            />
        </>
    );
}

export default AddressForm
