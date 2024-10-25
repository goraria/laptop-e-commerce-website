import React, {Component, useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import AddressItem from "../../components/information/address/AddressItem.jsx";
import AddressForm from "../../components/information/address/AddressForm.jsx";

let ListAddress = () => {
    const [addresses] = useState([
        { id: 1, tower: "Gorth", street: "Henovia", district: "San Siro", city: "Milano", state: "Madonnina", country: "Italy" },
        { id: 2, tower: "Tower B", street: "Elm Street", district: "District 9", city: "New York", state: "New York", country: "USA" },
        // Add more address data as needed
    ]);

    const [selectedAddress, setSelectedAddress] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const handleCardClick = (address) => {
        setSelectedAddress(address);
        setModalShow(true);
    };

    const handleModalClose = () => {
        setModalShow(false);
        setSelectedAddress(null);
    };

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
                // onHide={() => setModalShow(false)}
                onHide={handleModalClose}
                address={selectedAddress}
            />
        </>
    )
}

export default ListAddress