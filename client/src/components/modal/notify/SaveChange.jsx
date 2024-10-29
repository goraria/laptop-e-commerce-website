import {useState} from "react";
import {Button, Modal} from "react-bootstrap";

const SaveChange = ({ show, onHide, onSave }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title>Save Changes</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to save changes?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SaveChange