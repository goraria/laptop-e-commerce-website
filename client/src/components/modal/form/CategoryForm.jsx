import axios, { formToJSON } from "axios";
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
export const CategoryForm = ({ category, show, onHide, onReload }) => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        idcategory: '',
        category_name: ''
    });
    const [error, setError] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    useEffect(() => {
        if (category) {
            setFormData({
                idcategory: category.idcategory || '',
                category_name: category.category_name || '',
            });
        } else {
            setFormData({
                idcategory: '',
                category_name: ''
            });
        }
    }, [category]);

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
        // const datastring = convertFormDataToString(formData)
        console.log(formData)
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            const allFieldsFilled = Object.values(formData.category_name).every(value => value.trim() !== "");

            if (allFieldsFilled) {
                setShowConfirmModal(true);
            } else {
                setValidated(true);
            }
        }
    };

    const handleConfirmSave = async () => {
        try {
            console.log("aaaaaaaaaaa")
            const response = category
                ? await axios.post(`http://localhost:5172/admin/update-category/${category.idcategory}`, formData)
                : await axios.put('http://localhost:5172/admin/create-category', formData);
            if (response.status === 200 || response.status === 201) {
                setShowConfirmModal(false)
                onHide();
                onReload()
            }
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Failed to save category');
        }
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5172/admin/delete/${category.idaddress}`, {
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
                        <h3>Edit Category</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleInvalid}> {/*onSubmit={handleSubmit, openConfirmModal}*/}
                        <Row className="mb-3">
                            <Form.Group as={Col} md={12} lg={12} sm={12} controlId="category_name">
                                <Form.Label>Category Name</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="category_name">
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="category_name"
                                        value={formData.category_name}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter Category Name.
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
                    {category ?
                        <>
                            <Button onClick={handleInvalid} variant="info">
                                <FontAwesomeIcon icon={faCheck} className="me-2" />
                                <span>Save changes</span>
                            </Button>
                        </> : <>
                            <Button type="submit" variant="success" onClick={handleInvalid}>
                                <FontAwesomeIcon icon={faPlus} className="me-2" />
                                <span>Create Category</span>
                            </Button>
                        </>
                    }
                </Modal.Footer>
            </Modal >
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