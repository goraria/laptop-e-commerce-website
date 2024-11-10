import axios from "axios";
import SaveChange from "../notify/SaveChange.jsx";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faCheck,
    faCity,
    faFlag,
    faGlobe,
    faPlus,
    faRoad,
    faTrash,
    faUser,
    faXmark,
    faPhone,
    faMailBulk
} from "@fortawesome/free-solid-svg-icons";
export const ConfigurationForm = ({ configuration, show, onHide, onReload }) => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        cpu: '',
        gpu: '',
        price: '',
        ram: '',
        screen: '',
        storage: '',
        resolution: '',
        product_name: ''
    });
    const [error, setError] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    useEffect(() => {
        if (configuration) {
            setFormData({
                cpu: configuration.cpu || '',
                gpu: configuration.gpu || '',
                price: configuration.price || '',
                ram: configuration.ram || '',
                screen: configuration.screen || '',
                storage: configuration.storage || '',
                resolution: configuration.resolution || '',
                product_name: configuration.product_name || '',
            });
        } else {
            setFormData({
                cpu: '',
                gpu: '',
                price: '',
                ram: '',
                screen: '',
                storage: '',
                resolution: '',
                product_name: ''
            });
        }
    }, [configuration]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };
    const convertFormDataToString = (data) => {
        return Object.fromEntries(
            Object.entries(data).map(([key, value]) => [key, String(value || "")])
        );
    };
    const handleInvalid = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        const datastring = convertFormDataToString(formData)
        console.log(datastring)
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            const allFieldsFilled = Object.values(datastring).every(value => value.trim() !== "");

            if (allFieldsFilled) {
                console.log("1")
                setShowConfirmModal(true);
            } else {
                console.log("2")
                setValidated(true);
            }
        }
    };

    const handleConfirmSave = async () => {
        try {
            // const token = localStorage.getItem('token');
            console.log(formData)
            const response = configuration
                ? await axios.post(`http://localhost:5172/admin/update-configuration/${configuration.idconfiguration}`, formData)
                : await axios.put('http://localhost:5172/admin/create-configuration', formData);


            if (response.status === 200 || response.status === 201) {
                // alert(address ? 'Address updated successfully' : 'Address added successfully');
                setShowConfirmModal(false)
                onHide();
                onReload()
            }
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Failed to save configuration');
        }
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5172/admin/delete/${configuration.idaddress}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setShowConfirmDelete(false);
            onHide();
            onReload()
        } catch (error) {
            console.error("Error deleting address:", error);
            setError(error.response ? error.response.data.message : 'Failed to save address');
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
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>Edit Configuration</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>Note</h4> */}
                    {/* <p>
                        Enter invalid values of all input groups to help us know your location. Then we can deliver your package.
                    </p> */}
                    <Form noValidate validated={validated} onSubmit={handleInvalid}> {/*onSubmit={handleSubmit, openConfirmModal}*/}
                        <Row className="mb-3">
                            <Form.Group as={Col} md={8} controlId="cpu">
                                <Form.Label>CPU</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="cpu">
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="cpu"
                                        value={formData.cpu}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter CPU.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md={4} controlId="ram">
                                <Form.Label>RAM</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="ram">
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="ram"
                                        value={formData.ram}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter Ram.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md={8} controlId="gpu">
                                <Form.Label>GPU</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="gpu">
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="gpu"
                                        value={formData.gpu}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter GPU.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md={4} controlId="storage">
                                <Form.Label>Storage</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="storage">
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        name="storage"
                                        value={formData.storage}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter storage.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md={4} controlId="screen">
                                <Form.Label>Screen</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="screen">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        name="screen"
                                        value={formData.screen}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter screen.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md={8} controlId="resolution">
                                <Form.Label>Resolution</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="resolution">
                                        <FontAwesomeIcon icon={faMailBulk} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        name="resolution"
                                        value={formData.resolution}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter resolution.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md={5} controlId="price">
                                <Form.Label>Price</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="price">
                                        <FontAwesomeIcon icon={faFlag} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter price.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} md={7} controlId="product_name">
                                <Form.Label>Product Name</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="product_name">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        name="product_name"
                                        value={formData.product_name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter Product Name.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <hr />
                        {error && <p className="text-danger">{error}</p>}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide} variant="secondary" style={{ marginRight: "auto" }}>
                        <FontAwesomeIcon icon={faXmark} className="me-2" />
                        <span>Close</span>
                    </Button>
                    {/*<Button type="submit" variant="info"*/}
                    {/*        onClick={handleSubmit}> /!*onClick={handleSubmit, openConfirmModal}*!/*/}
                    {/*    <FontAwesomeIcon icon={faCheck} className="me-2"/>*/}
                    {/*    <span>Save changes</span>*/}
                    {/*</Button>*/}
                    {configuration ?
                        <>
                            {/* <Button onClick={() => setShowConfirmDelete(true)} variant="danger" className="me-3">
                                <FontAwesomeIcon icon={faTrash} className="me-2" />
                                <span>Delete Address</span>
                            </Button> */}
                            <Button onClick={handleInvalid} variant="info">
                                <FontAwesomeIcon icon={faCheck} className="me-2" />
                                <span>Save changes</span>
                            </Button>
                        </> : <>
                            <Button type="submit" variant="success" onClick={handleInvalid}>
                                <FontAwesomeIcon icon={faPlus} className="me-2" />
                                <span>Create Configuration</span>
                            </Button>
                        </>
                    }
                </Modal.Footer>
            </Modal>
            <SaveChange
                show={showConfirmModal}
                onHide={() => setShowConfirmModal(false)}
                onSave={() => { handleConfirmSave(); setShowConfirmModal(false) }}
            />
            <SaveChange
                show={showConfirmDelete}
                onHide={() => setShowConfirmDelete(false)}
                onSave={handleDelete}
            />
        </>
    )
}