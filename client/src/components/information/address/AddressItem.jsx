import React, {Component, useState} from "react";
import {Container, Button, Form, Row, Col, Image, Card, InputGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faMinus, faAt, faUser, faPhone, faEdit} from "@fortawesome/free-solid-svg-icons";
import jp from "../../../assets/images/jp.jpeg";
import UserSidebar from "../../../layouts/UserSidebar.jsx";
import AccountInfo from "../../../pages/user-infomation/AccountInfo.jsx";
import AddressForm from "./AddressForm.jsx";

let AddressItem = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const { item } = props;
    return (
        <>
            <Container style={{padding: '0 8px'}}>
                <div style={{display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center"}}> {/**/}
                    <h4 style={{margin: '0 0 0 8px'}}>Address</h4>
                    <Button variant="warning" onClick={() => setModalShow(true)} style={{marginLeft: 'auto'}}>
                        <FontAwesomeIcon icon={faEdit} className="me-2"/>
                        <span>Edit Address</span>
                    </Button>
                </div>
                <div>
                    <h6 style={{margin: 8}}>{item.street}</h6>
                    <h6 style={{margin: 8}}>{item.district}</h6>
                    <h6 style={{margin: 8}}>{item.city}</h6>
                    <h6 style={{margin: 8}}>{item.state}</h6>
                    <h6 style={{margin: 8}}>{item.country}</h6>
                </div>
            </Container>
            <AddressForm
                show={modalShow}
                onHide={() => setModalShow(false)}
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
