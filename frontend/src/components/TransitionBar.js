import { Component } from "react";

import {
    Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Row, Col, Card, Image, Stack, Carousel, Nav, Navbar
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard, faCheck, faTruck, faShieldAlt, faShoppingBag, faMoneyBills, faLaptop, faKeyboard, faMouse
} from '@fortawesome/free-solid-svg-icons';

class TransitionBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { classification } = this.props;
        return (
            <Navbar fixed="top" bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary" style={{marginTop:56}}>
                <Container>
                    <Stack direction="horizontal" gap={3}>

                        {classification.map((brandS) => <DropdownButton
                            id="dropdown-basic-button"
                            title={<><FontAwesomeIcon icon={brandS.icon} style={{ width: 24 }} />{' '}{brandS.category}</>}
                            variant="outline-danger"
                        >
                            {brandS.items.map((item) => (<Dropdown.Item as="a" href="#action1">{item}</Dropdown.Item>))}

                        </DropdownButton>)}

                    </Stack>
                </Container>
            </Navbar>
        )
    }
}
export default TransitionBar