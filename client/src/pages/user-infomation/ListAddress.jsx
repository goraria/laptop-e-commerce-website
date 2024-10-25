import React, {Component, useEffect, useState} from "react";
import {Button, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt,
    faBullseye,
    faCity,
    faEdit,
    faLocationDot,
    faPhone,
    faPlus,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import AddressItem from "../../components/information/address/AddressItem.jsx";
import AddressForm from "../../components/information/address/AddressForm.jsx";

let ListAddress = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Container style={{display: "flex", padding: '0 8px'}}>
                <h2 style={{margin: 0}}>List Address</h2>
                <Button variant="primary" onClick={() => setModalShow(true)} style={{marginLeft: 'auto'}}>
                    <FontAwesomeIcon icon={faPlus} className="me-2"/>
                    <span>Add Address</span>
                </Button>
            </Container>
            <AddressForm
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default ListAddress