import { Component } from "react";

import {
    Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Row, Col, Card, Image, Stack, Carousel, Nav, Navbar
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard, faCheck, faTruck, faShieldAlt, faShoppingBag, faMoneyBills, faLaptop, faKeyboard, faMouse
} from '@fortawesome/free-solid-svg-icons';


const clsifications = [
            { category: "Laptop", icon: faLaptop, items: ['#a', '#b', '#c',] },
            { category: "Chuột", icon: faMouse, items: ['#action1', '#action1', '#action1',] },
            { category: "Bàn phím", icon: faKeyboard, items: ['#action1', '#action1', '#action1',] },

        ]
class TransitionBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Navbar fixed="top" bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary" style={{ marginTop: 56, zIndex:1 }}>
                <Container>
                    <Stack direction="horizontal" gap={3}>

                        {clsifications.map((brandS,index) => <DropdownButton
                            key={index}
                            id="dropdown-basic-button"
                            title={<><FontAwesomeIcon icon={brandS.icon} style={{ width: 24 }} />{' '}{brandS.category}</>}
                            variant="outline-primary"
                        >
                            {brandS.items.map((item,index) => (<Dropdown.Item as="a" href="#action1" key={index}>{item}</Dropdown.Item>))}

                        </DropdownButton>)}

                    </Stack>
                </Container>
            </Navbar>
        )
    }
}
export default TransitionBar