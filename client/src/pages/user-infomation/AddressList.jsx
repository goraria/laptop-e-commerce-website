import React, {Component, useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import AddressItem from "../../components/information/address/AddressItem.jsx";
import AddressForm from "../../components/modal/form/AddressForm.jsx";

let AddressList = ({ onReload }) => {
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
                onReload={onReload}
                address={selectedAddress}
            />
        </>
    )
}

export default AddressList