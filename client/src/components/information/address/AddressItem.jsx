import React, {Component, useState} from "react";
import {Container, Button, Form, Row, Col, Image, Card, InputGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faMinus, faAt, faUser, faPhone, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import jp from "../../../assets/images/jp.jpeg";
import UserSidebar from "../../../layouts/UserSidebar.jsx";
import AccountInfo from "../../../pages/user-infomation/AccountInfo.jsx";
import AddressForm from "../../modal/form/AddressForm.jsx";

const AddressItem = (props, onReload) => {
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const { item } = props;

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
            <Container style={{padding: '0 8px'}}>
                <div style={{display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center"}}> {/**/}
                    <h4 style={{margin: '0 auto 0 8px'}}>Address</h4>
                    <Button variant="warning" onClick={() => handleCardClick(item)}>
                        <FontAwesomeIcon icon={faEdit} className="me-2"/>
                        <span>Edit Address</span>
                    </Button>
                </div>
                <hr/>
                <div>
                    {/*<h6 style={{margin: 8}}>{item.idaddress}</h6>*/}
                    <h6 style={{margin: 8}}>{item.tower}</h6>
                    <h6 style={{margin: 8}}>{item.street}</h6>
                    <h6 style={{margin: 8}}>{item.district}</h6>
                    <h6 style={{margin: 8}}>{item.city}</h6>
                    <h6 style={{margin: 8}}>{item.state}</h6>
                    <h6 style={{margin: 8}}>{item.country}</h6>
                </div>
            </Container>
            <AddressForm
                show={modalShow}
                // onHide={() => setModalShow(false)}
                onHide={handleModalClose}
                onReload={onReload}
                address={selectedAddress}
            />
        </>
    );
}

// class AddressItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//
//     render() {
//
//     }
// }

export default AddressItem;
